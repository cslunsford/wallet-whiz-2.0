const { User, Account, Transaction } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const plaidClient = require('../config/plaid');
const { formattedStartDate, formattedEndDate } = require('../utils/date');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                return User.findById(context.user._id).select('plaidAccessToken');
            } else {
                throw AuthenticationError;
            }
        },
        accounts: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate('accounts');
                return user.accounts;
            } else {
                throw AuthenticationError;
            }
        },
        transactions: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate('transactions');
                return user.transactions;
            } else {
                throw AuthenticationError;
            }
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);
            return { token, user };
        },
        register: async (parent, { email, password }) => {
            const user = await User.create({ email, password });
            const token = signToken(user);

            return { token, user };
        },
        exchangePublicToken: async (parent, { publicToken }, context) => {
            if (!context.user) {
                throw AuthenticationError;
            }

            try {
                const plaidResponse = await plaidClient.itemPublicTokenExchange({
                    public_token: publicToken,
                });

                const accessToken = plaidResponse.data.access_token;

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { plaidAccessToken: accessToken }
                );

                return { access_token: accessToken };
            } catch (err) {
                throw new Error('Failed to exchange token.');
            }
        },
        fetchPlaidData: async (parent, { accessToken }, context) => {
            try {
                const accountsResponse = await plaidClient.accountsGet({
                    access_token: accessToken
                });
                const accounts = accountsResponse.data.accounts;
                console.log(accounts);

                const transactionsResponse = await plaidClient.transactionsGet({
                    access_token: accessToken,
                    start_date: formattedStartDate,
                    end_date: formattedEndDate,
                });
                const transactions = transactionsResponse.data.transactions;
                console.log(transactions);

                const user = await User.findById(context.user._id);

                const savedAccounts = await Promise.all(
                    accounts.map(async (account) => {
                        const plaidAccountData = {
                            account_id: account.account_id,
                            accountName: account.name,
                            balance: account.balances.current,
                        };
                        return plaidAccountData;
                    })
                );

                const savedTransactions = await Promise.all(
                    transactions.map(async (transaction) => {
                        const plaidTransactionData = {
                            account_id: transaction.account_id,
                            amount: transaction.amount,
                            merchantName: transaction.merchant_name,
                            date: transaction.date,
                        };
                        return plaidTransactionData;
                    })
                );

                user.accounts = [];
                user.transactions = [];

                user.accounts = [...savedAccounts];
                user.transactions = [...savedTransactions];

                await user.save();

                return {
                    user,
                    savedAccounts,
                    savedTransactions,
                };
            } catch (err) {
                console.error(err);
                throw new Error('Failed to retrieve Plaid data');
            }
        }
    }
}

module.exports = resolvers;