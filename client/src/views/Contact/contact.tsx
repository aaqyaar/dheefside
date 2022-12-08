import toast from "react-hot-toast";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiPhone,
} from "react-icons/hi";
import ContactForm from "views/Contact/contact-form";
import { ContactInput, useContactMutation } from "__generated__/generated";

export default function Contact() {
  const [sendEmailMutation] = useContactMutation();

  const sendEmail = async (values: ContactInput) => {
    try {
      const { data, errors } = await sendEmailMutation({
        variables: {
          input: values,
        },
      });
      if (data?.contact) {
        toast.success("Email sent successfully");
      }
      if (errors) {
        toast.error(errors[0].message);
      }
    } catch (error: any) {
      toast.error(error.message as any);
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="flex py-28 bg-secondary flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-7xl font-bold text-center text-gray-200">
            Contact Us
          </h1>
          <p className="text-center text-gray-300 max-w-md text-xl font-extralight">
            Need to get in touch? We'd love to hear from you. Here's how you can
            talk with us
          </p>
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-4 lg:gap-10 py-20">
        <div className="flex flex-col lg:items-start px-4 space-y-4 justify-center">
          <h1 className="text-3xl font-bold">Contact Details</h1>
          <p className="max-w-lg">
            Rather than worrying about switching offices every couple years, you
            can instead stay in the same location and grow-up from your shared
            coworking space to an office that takes up an entire floor.
          </p>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-4">
              <HiPhone className="text-white p-2 rounded-full w-10 h-10 bg-secondary" />
              <div>
                <h1 className="text-lg text-gray-600 font-bold">Phone</h1>
                <p className="text-gray-400">+1 234 567 890</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <HiOutlineMail className="text-white p-2 rounded-full w-10 h-10 bg-secondary" />
              <div>
                <h1 className="text-lg text-gray-600 font-bold">Email</h1>
                <p className="text-gray-400">info@dheefside.net</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <HiOutlineLocationMarker className="text-white p-2 rounded-full w-10 h-10 bg-secondary" />
              <div>
                <h1 className="text-lg text-gray-600 font-bold">Address</h1>
                <p className="text-gray-400">Mogadishu (Banaadir Somalia)</p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm onSendEmail={sendEmail} />
      </div>
    </section>
  );
}
