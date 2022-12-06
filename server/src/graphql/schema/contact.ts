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
        contact(input: ContactInput!): ReturnData!
    }
`;
