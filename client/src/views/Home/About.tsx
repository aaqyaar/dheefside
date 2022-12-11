import { Button } from "components";
import { motion } from "framer-motion";
import styles from "styles/style";
import {
  fadeIn,
  imageRotationVariant,
  staggerContainer,
  textVariant,
} from "components/animate";
export default function About() {
  return (
    <section className={`bg-gray-100 relative overflow-hidden`}>
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`py-20`}
      >
        {/* grid */}
        <div
          className={`flex justify-center items-center lg:flex-row flex-col gap-y-4`}
        >
          <motion.div variants={imageRotationVariant("left")} className="px-4 ">
            <img
              src="/images/about.jpg"
              alt="developer planning project user experience"
              className="rounded-xl"
            />
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1) as any}
            className={`overflow-hidden  sm:${styles.paddingX}`}
          >
            <motion.h1
              variants={textVariant(1.2) as any}
              className={`text-5xl text-gray-700 font-bold`}
            >
              About Us
            </motion.h1>
            <p className={`text-gray-700 text-2xl my-4 2xl:text-3xl`}>
              From digital customer experience to trust and safety, AI services,
              and consulting, we believe we are responsible for supporting our
              partner's success in protecting their interests through innovation
              and technology.
            </p>
            <blockquote
              className={`my-4 text-xl xl:text-2xl border-l-4 border-primary pl-4`}
            >
              <q>
                We protect what matters most to us, you, and citizens worldwide.
              </q>
            </blockquote>
            <p className="text-gray-700 text-2xl 2xl:text-3xl my-4">
              A perfect blend of technology and human intelligence, we are a
              team of experts who are passionate about protecting our clients
              and their customers. We are a team of experts who are passionate
              about protecting our clients and their customers. We are a team of
              experts who are passionate about protecting our clients and their
              customers. We are a team of experts who are passionate about
              protecting our clients and their customers.
            </p>
            <Button className="bg-white text-black/95 hover:bg-gray-50">
              Learn more......
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// grid-cols-1 md:grid-cols-2
// col-span-12 lg:mr-auto lg:col-span-7
// col-span-12 lg:col-span-5 lg:mr-auto
