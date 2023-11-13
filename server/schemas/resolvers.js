const { User, Account, Transaction } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const plaidClient = require('../config/plaid');

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
                return Account.find({ userId: context.user._id });
            } else {
                throw AuthenticationError;
            }
        },
        transactions: async (parent, args, context) => {
            if (context.user) {
                return Transaction.find({ userId: context.user._id });
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
        fetchPlaidData: async (parent, args, context) => {
            try {
                const accountsResponse = await plaidClient.accountsGet({
                    access_token: context.user.plaidAccessToken
                });
                const accounts = accountsResponse.data.accounts;

                const transactionsResponse = await plaidClient.transactionsGet({
                    access_token: context.user.plaidAccessToken,
                });
                const transactions = transactionsResponse.data.transactions;

                const savedAccounts = await Promise.all(
                    accounts.map(async (account) => {
                        const newAccount = new Account({
                            accountName: account.name,
                            balance: account.balances.current,
                        });
                        return newAccount.save();
                    })
                );

                const savedTransactions = await Promise.all(
                    transactions.map(async (transaction) => {
                        const newTransaction = new Transaction({
                            amount: transaction.amount,
                            merchantName: transaction.merchant_name,
                            date: transaction.date,
                        });
                        return newTransaction.save();
                    })
                );

                return {
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