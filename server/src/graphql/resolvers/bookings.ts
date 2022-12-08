import Bookings from "../../models/bookings";
import EmailRepository from "../../documents/emailRepository";
import {
  Bookings as IBookings,
  BookingInput,
  ReturnData,
  QueryBookingArgs,
} from "../../generated/graphql";

const Mutation = {
  createBookings: async (
    _: any,
    { input }: { input: BookingInput }
  ): Promise<ReturnData> => {
    try {
      const isExist = await Bookings.findOne({
        software: input.software,
        email: input.email,
      });
      if (isExist) {
        throw new Error("Your already booked for this Software");
      }
      const newBookedDemos = new Bookings(input);
      await newBookedDemos.save();
      const result = await EmailRepository.sendBookedEmail(
        newBookedDemos as any
      );
      return { ...result, data: newBookedDemos };
    } catch (err) {
      throw err;
    }
  },
};

const Query = {
  bookings: async (): Promise<IBookings[]> => {
    try {
      const res: IBookings[] = await Bookings.find();
      return res;
    } catch (err) {
      throw err;
    }
  },
  booking: async (
    _: any,
    { email }: QueryBookingArgs
  ): Promise<IBookings[]> => {
    try {
      const res: any = await Bookings.find({
        email,
      }).exec();
      return res;
    } catch (error) {
      throw error;
    }
  },
};

export const bookingsResolvers = {
  Query,
  Mutation,
};
