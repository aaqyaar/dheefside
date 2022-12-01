export default `
    type Service {
        _id: ID!
        name: String!
        description: String!
        image: String!
        category: String!        
    }
    input ServiceInput {
        name: String!
        description: String!
        image: String!
        category: String!
    }
    type Query {
        services: [Service!]!
        service(serviceId: ID!): Service!
    }
    type Mutation {
        createService(serviceInput: ServiceInput): Service!
    }
`;
