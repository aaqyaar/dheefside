import {
  serviceSchema,
  userSchema,
  teamSchema,
  contactSchema,
  bookingsSchema,
} from ".";

export const typeDefs = `#graphql
  ${serviceSchema}
  ${userSchema}
  ${teamSchema}
  ${contactSchema}
  ${bookingsSchema}
`;
