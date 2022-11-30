export const typeDefs = `#graphql
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
    user: User!
  }
  type Query {
    user: User!
    users: [User!]!
  }
  type Mutation {
    createUser(userInput: UserInput): User!
    login(email: String!, password: String!): AuthData!
  }
`;
