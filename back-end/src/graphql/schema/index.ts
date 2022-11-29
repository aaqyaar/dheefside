import { buildSchema } from "graphql";
import User from "../../models/user";

const schema = buildSchema(`
    type Query {
       user: ${User}
    }

    type AuthData {
        user: ${User}
        token: String!
    }
    type Mutation {
        createUser(name: String!, email: String!, password: String!): String
        login(email: String!, password: String!): AuthData!
    }

    schema {
        query: Query
        mutation: Mutation
    }
    
`);
