import { userResolvers } from "./user";
import { serviceResolvers } from "./service";
import { teamResolvers } from "./team";
import { contactResolvers } from "./contact";
import { bookedDemosResolvers } from "./booked_demos";

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...serviceResolvers.Query,
    ...teamResolvers.Query,
    ...contactResolvers.Query,
    ...bookedDemosResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...serviceResolvers.Mutation,
    ...teamResolvers.Mutation,
    ...contactResolvers.Mutation,
    ...bookedDemosResolvers.Mutation,
  },
};
