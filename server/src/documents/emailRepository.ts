import { booked_Template } from "./booked-template";
import { email_template } from "./emailTemplate";

import { sendEmail } from "../documents/nodemailer";

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
  sendBookedEmail: async (input: any) => {
    try {
      const result = await sendEmail({
        to: input.email,
        subject: `Welcome to Dheefside Softwares - ${input.name}} - you have booked a demo for ${input.software}`,
        text: booked_Template(input),
      });
      return result;
    } catch (err) {
      throw err;
    }
  },
};

export default emailRepository;
