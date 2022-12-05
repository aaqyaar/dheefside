export default `
    type Contact {
        name: String!
        email: String!
        phone: String!
        message: String!
    }

    input ContactInput {
        name: String!
        email: String!
        phone: String!
        message: String!
    }

    type Mutation {
        contact(input: ContactInput!): Contact!
    }
`;
