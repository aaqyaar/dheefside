import { serviceSchema, userSchema, teamSchema } from ".";

export const typeDefs = `#graphql
  ${serviceSchema}
  ${userSchema}
  ${teamSchema}
`;
