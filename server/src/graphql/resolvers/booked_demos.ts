import BookedDemos from "../../models/booked_demos";
import EmailRepository from "../../documents/emailRepository";
import {
  BookedDemos as BookedDemosType,
  BookedDemosInput,
  ReturnData,
} from "../../generated/graphql";

const Mutation = {
  bookedDemos: async (
    _: any,
    { input }: { input: BookedDemosInput }
  ): Promise<ReturnData> => {
    try {
      const bookedDemos = await BookedDemos.findOne({
        software: input.software,
      });
      if (bookedDemos) {
        throw new Error("Software already booked");
      }
      const newBookedDemos = new BookedDemos(input);
      await newBookedDemos.save();
      const result = await EmailRepository.sendBookedEmail(newBookedDemos);
      return { ...result };
    } catch (err) {
      throw err;
    }
  },
};

const Query = {
  bookedDemos: async (): Promise<BookedDemosType[]> => {
    try {
      const bookedDemos: BookedDemosType[] = await BookedDemos.find();
      return bookedDemos;
    } catch (err) {
      throw err;
    }
  },
};

export const bookedDemosResolvers = {
  Query,
  Mutation,
};
