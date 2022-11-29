export const User = `
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        avatar: String
        createdAt: String!
    }
`;

export const UserQueries = `
    user: User
`;
