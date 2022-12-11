import { Button } from "components";
import svg from "constants/svg-exports";
import { HiStatusOnline } from "react-icons/hi";
import styles from "styles/style";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "components/animate";

export default function Hero() {
  return (
    <section id="hero" className="overflow-hidden">
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid lg:grid-cols-12"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1) as any}
          className={`2xl:mt-20 col-span-12 lg:col-span-6 ${styles.paddingY} ${styles.paddingX}`}
        >
          <h1
            className={`2xl:text-8xl lg:text-7xl md:text-5xl text-4xl font-extrabold prose`}
          >
            Working with you <br /> to unlock your <br /> potential.
          </h1>
          <p className={`my-4 prose ${styles.paragraph}`}>
            We, your idea, Your brand, and your customers. We come when you need
            us most. Gain access to capital, talent, the right technology,
            mentorship, and more.
          </p>
          <div className="flex flex-col items-start justify-start">
            <Button
              size="lg"
              startIcon={<HiStatusOnline className="text-xl" />}
              variant="contained"
              className="py-4 px-5"
            >
              Book A Demo
            </Button>
          </div>

          <div>{svg.upArrow}</div>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1) as any}
          className="col-span-12 lg:col-span-6 order-first lg:order-none"
        >
          <img
            src="/images/hero.jpg"
            alt="hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
      <div className="absolute right-2 top-10">{svg.gridOffset}</div>
    </section>
  );
}
