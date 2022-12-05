import { Button } from "components";
import svg from "constants/svg-exports";
import { motion } from "framer-motion";
import styles from "styles/style";

export default function About() {
  return (
    <section className={`bg-gray-100 relative`}>
      <div className={`py-20`}>
        {/* grid */}
        <div className={`grid lg:grid-cols-12 gap-y-4 gap-4 lg:gap-y-0`}>
          <motion.div className="col-span-12 px-4 lg:col-span-6">
            <img
              src="/images/about.jpg"
              alt="developer planning project user experience"
              className="rounded-xl"
            />
          </motion.div>

          <div
            className={`col-span-12 lg:col-span-6 overflow-hidden  sm:${styles.paddingX}`}
          >
            <h1 className={`text-5xl text-gray-700 font-bold`}>About Us</h1>
            <p className={`text-gray-700 text-2xl my-4`}>
              From digital customer experience to trust and safety, AI services,
              and consulting, we believe we are responsible for supporting our
              partner's success in protecting their interests through innovation
              and technology.
              <blockquote
                className={`my-4 text-xl border-l-4 border-primary pl-4`}
              >
                <q>
                  We protect what matters most to us, you, and citizens
                  worldwide.
                </q>
              </blockquote>
              A perfect blend of people and technology We see business as a set
              of challenges and solutions. We don't like technology over the
              human mind. Instead, the right solution determines the right
              balance. For us, it takes the perfect mix of highly talented
              people, technology, and data to produce tremendously impressive
              results.
            </p>

            <Button className="bg-white text-black/95 hover:bg-gray-50">
              Learn more......
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// grid-cols-1 md:grid-cols-2
// col-span-12 lg:mr-auto lg:col-span-7
// col-span-12 lg:col-span-5 lg:mr-auto
