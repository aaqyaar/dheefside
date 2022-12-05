import { Contact, ContactInput } from "../../generated/graphql";
import { sendEmail } from "../../documents/nodemailer";
import { email_template } from "../../documents/emailTemplate";

const Mutation = {
  contact: async (
    _: any,
    { input }: { input: ContactInput }
  ): Promise<Contact> => {
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
};

const Query = {};

export const contactResolvers = {
  Query,
  Mutation,
};
