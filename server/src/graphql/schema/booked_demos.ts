export default `
    type BookedDemos {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        phone: String!
        software: String!
        company: String!
        address: String!
    }

    input BookedDemosInput {
        firstName: String!
        lastName: String!
        email: String!
        phone: String!
        software: String!
        company: String!
        address: String!
    }


    type Envelope {
        from: String
        to: [String]
    }
    type Result {
        accepted: [String]
        envelopeTime: Int
        messageTime: Int
        messageSize: Int
        response: String
        envelope: Envelope
        messageId: String
        rejected: [String]
    }

    type ReturnData {
        result: Result
    }

    type Mutation {
        bookedDemos(input: BookedDemosInput!): ReturnData!
    }

    type Query {
        bookedDemos: [BookedDemos!]!
    }
    `;
