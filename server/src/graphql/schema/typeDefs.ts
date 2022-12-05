import { serviceSchema, userSchema, teamSchema, contactSchema } from ".";

export const typeDefs = `#graphql
  ${serviceSchema}
  ${userSchema}
  ${teamSchema}
  ${contactSchema}
`;
