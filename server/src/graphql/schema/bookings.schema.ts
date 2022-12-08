export default `
    scalar Date
    type Bookings {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        phone: String!
        software: String!
        company: String!
        address: String!
        createdAt: Date!
    }

    input BookingInput {
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
        data: Bookings
    }

    type Mutation {
        createBookings(input: BookingInput!): ReturnData!
    }

    type Query {
        bookings: [Bookings!]!
        booking(email: String!): [Bookings!]!
    }

`;
