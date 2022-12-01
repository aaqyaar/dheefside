export default `
    type Team {
        _id: ID!
        name: String!
        position: String!
        avatar: String!
        description: String!
        department: String!
    }
    input TeamInput {
        name: String!
        position: String!
        avatar: String!
        description: String!
        department: String!
    }
    type Query {
        teams: [Team!]!
        team(teamId: ID!): Team!
    }
    type Mutation {
        createTeam(teamInput: TeamInput): Team!
        updateTeam(teamId: ID!, teamInput: TeamInput): Team!
    }
`;
