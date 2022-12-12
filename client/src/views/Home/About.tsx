import { Button, Grid } from "components";
import { Link } from "react-router-dom";
import { PATH } from "routes/paths";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="overflow-hidden">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 1 }}
        >
          <div className="font-light text-gray-800 sm:text-lg">
            <h2 className="mb-4 text-4xl  xl:text-5xl tracking-tight font-extrabold text-gray-800">
              About us - our short story
            </h2>
            <p className="mb-4 text-xl">
              A perfect blend of technology and human intelligence, we are a
              team of experts who are passionate about protecting our clients
              and their customers. We are a team of experts who are passionate
              about protecting our clients and their customers.
            </p>
            <blockquote
              className={`my-4 text-xl border-l-4 border-primary pl-4`}
            >
              <q>
                We protect what matters most to us, you, and citizens worldwide.
              </q>
            </blockquote>
            <p className="text-xl">
              From digital customer experience to trust and safety, AI services,
              and consulting, we believe we are responsible for supporting our
              partner's success in protecting their interests through innovation
              and technology. We are digital partners focused on helping it
              businesses protect, represent, and nurture their brands. Whether
              you're just stepping in or a well-known icon needing a boost, we
              can help your business skyrocket.
            </p>

            <Link to={PATH.about}>
              <Button className="mt-4 btn btn-outlined">Learn more.....</Button>
            </Link>
          </div>
        </motion.div>
        <Grid className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </Grid>
      </div>
    </section>
  );
}
