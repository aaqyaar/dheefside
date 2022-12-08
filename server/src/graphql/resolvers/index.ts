import { userResolvers } from "./user";
import { serviceResolvers } from "./service";
import { teamResolvers } from "./team";
import { contactResolvers } from "./contact";
import { bookingsResolvers } from "./bookings";

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...serviceResolvers.Query,
    ...teamResolvers.Query,
    ...contactResolvers.Query,
    ...bookingsResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...serviceResolvers.Mutation,
    ...teamResolvers.Mutation,
    ...contactResolvers.Mutation,
    ...bookingsResolvers.Mutation,
  },
};
