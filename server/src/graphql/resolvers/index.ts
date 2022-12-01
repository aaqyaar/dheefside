import { userResolvers } from "./user";
import { serviceResolvers } from "./service";
import { teamResolvers } from "./team";

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...serviceResolvers.Query,
    ...teamResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...serviceResolvers.Mutation,
    ...teamResolvers.Mutation,
  },
};
