import { booked_Template } from "./booking-template";
import { email_template } from "./emailTemplate";

import { sendEmail } from "../documents/nodemailer";
import { Bookings } from "../generated/graphql";

interface BookedDemosProps extends Bookings {
  createdAt: string;
  updatedAt: string;
}

const emailRepository = {
  sendEmail: async (input: any) => {
    try {
      const result = await sendEmail({
        from: input.email,
        subject: `A Message from Clients - ${input.name}}`,
        text: email_template(input),
      });
      return { ...result };
    } catch (err) {
      throw err;
    }
  },
  sendBookedEmail: async (input: Bookings) => {
    try {
      const result = await sendEmail({
        to: input.email,
        subject: `Welcome to Dheefside Softwares - ${input.firstName}} - you have booked a demo for ${input.software}`,
        text: booked_Template(input as BookedDemosProps),
      });
      return result;
    } catch (err) {
      throw err;
    }
  },
};

export default emailRepository;
