const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const plaidClient = require('../config/plaid');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
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
        }
    }
}

module.exports = resolvers;