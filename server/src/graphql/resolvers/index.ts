import { userResolvers } from "./user";
import { serviceResolvers } from "./service";
import { teamResolvers } from "./team";
import { contactResolvers } from "./contact";

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...serviceResolvers.Query,
    ...teamResolvers.Query,
    ...contactResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...serviceResolvers.Mutation,
    ...teamResolvers.Mutation,
    ...contactResolvers.Mutation,
  },
};
