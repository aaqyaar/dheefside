import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        avatar: String
    }
    input UserInput {
        name: String!
        email: String!
        password: String!
        avatar: String
    }
    type AuthData {
        token: String!
        user : User!
    }
    type RootQuery {
        user : User!
        users:  [User!]!
    }
    type RootMutation {
        createUser(userInput: UserInput) : User!
        login(email: String!, password: String!): AuthData!
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
