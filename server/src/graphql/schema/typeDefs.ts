import {
  serviceSchema,
  userSchema,
  teamSchema,
  contactSchema,
  bookedDemosSchema,
} from ".";

export const typeDefs = `#graphql
  ${serviceSchema}
  ${userSchema}
  ${teamSchema}
  ${contactSchema}
  ${bookedDemosSchema}
`;
