import Service from "../../models/service";
import {
  MutationCreateServiceArgs,
  Service as ServiceType,
} from "../../generated/graphql";

const Query = {
  services: async (): Promise<ServiceType[]> => {
    try {
      const services = await Service.find().exec();
      if (!services) {
        throw new Error("Services not found");
      }
      return services;
    } catch (err) {
      throw err;
    }
  },
};

const Mutation = {
  createService: async (
    _: any,
    { serviceInput }: MutationCreateServiceArgs
  ): Promise<ServiceType> => {
    try {
      const service = await Service.findOne({ name: serviceInput?.name });
      if (service) {
        throw new Error("Service already exists");
      }

      const newService = new Service({
        name: serviceInput?.name,
        description: serviceInput?.description,
        image: serviceInput?.image,
        category: serviceInput?.category,
      });

      const result = await newService.save();

      return { ...result._doc, password: null };
    } catch (err) {
      throw err;
    }
  },
};

export const serviceResolvers = {
  Query,
  Mutation,
};
