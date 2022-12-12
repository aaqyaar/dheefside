export default `
  type User {
  _id: ID!
  name: String!
  email: String!
  password: String!
  avatar: String
  company: String!
  phone: String!
}
input UserInput {
  name: String!
  email: String!
  password: String!
  avatar: String
  company: String!
  phone: String!
}

input LoginInput {
  email: String!
  password: String!
}
type AuthData {
  token: String!
  user: User!
}
type Query {
  user: User!
  users: [User!]!
}

scalar Object
scalar Void


type Mutation {
  createUser(userInput: UserInput): User!
  login(email:String, password:String): AuthData!
  verifyCode(email:String!, code:String!): Void
  resendCode(email:String): Void
}`;
