import svg from "constants/svg-exports";
import { HiPlay } from "react-icons/hi";
import styles from "styles/style";
import OursAbout from "./ours";
import { motion } from "framer-motion";
import { staggerContainer } from "components/animate";
import { TypingText } from "views/Home/Guidence";
export default function About() {
  return (
    <motion.section
      variants={staggerContainer as any}
      initial="hidden"
      whileInView={"show"}
      viewport={{
        once: false,
        amount: 0.25,
      }}
      className="pt-28"
    >
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-5xl  text-center lg:text-7xl  font-bold text-secondary">
          Our mission is to offer <br />
        </h1>
        <TypingText
          title="next generation solutions to our clients."
          textStyles="font-normal text-center lg:text-4xl text-3xl capitalize py-4 text-gray-700"
        />

        {/* <h2 className="font-normal text-center lg:text-4xl text-3xl capitalize py-4 text-gray-700">
            next generation solutions to our clients.
          </h2> */}
        <p className="prose text-center py-4 text-xl max-w-2xl font-light text-gray-900">
          We are digital partners focused on helping it businesses protect,
          represent, and nurture their brands. Whether you're just stepping in
          or a well-known icon needing a boost, we can help your business
          skyrocket.
        </p>

        <div className="hidden md:block absolute top-10 right-0 lg:right-40 opacity-30">
          <svg
            id="sw-js-blob-svg"
            className="w-96 h-96"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <defs>
              {" "}
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                {" "}
                <stop
                  id="stop1"
                  stop-color="rgba(0, 147, 76, 1)"
                  offset="0%"
                ></stop>{" "}
                <stop
                  id="stop2"
                  stop-color="rgba(0, 109, 91, 1)"
                  offset="100%"
                ></stop>{" "}
              </linearGradient>{" "}
            </defs>{" "}
            <path
              fill="url(#sw-gradient)"
              d="M28.7,-11.5C31.3,-1.1,23.6,10.4,12.4,19C1.2,27.6,-13.6,33.3,-22.4,27.6C-31.3,21.9,-34.3,4.9,-29.6,-8.3C-24.8,-21.5,-12.4,-30.9,0.3,-31C13,-31.1,26,-21.9,28.7,-11.5Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              stroke-width="0"
              style={{ transition: "all 0.3s ease 0s" }}
              stroke="url(#sw-gradient)"
            ></path>{" "}
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center justify-center">
          <HiPlay className="w-20 h-20 cursor-pointer text-secondary" />
        </div>
        <h3 className="text-2xl font-bold text-gray-700">Watch our story</h3>
      </div>

      <div
        className={`${styles.boxWidth} ${styles.marginY} ${styles.paddingY} px-2 lg:mx-auto`}
      >
        <div className="flex lg:flex-row flex-col">
          <div className={`flex flex-col items-start justify-start `}>
            <h1 className="text-4xl font-bold text-gray-700 border-b-2 border-gray-700 pb-2">
              Our Story
            </h1>

            <p className="prose text-gray-700 text-xl py-4">
              <b className={`${styles.blackBold}`}>Protective partner.</b> From
              digital customer experience to trust and safety, AI services, and
              consulting, we believe we are responsible for supporting our
              partner's success in protecting their interests through innovation
              and technology. We protect what matters most to us, you, and
              citizens worldwide.
              <b className={`${styles.blackBold}`}>
                A perfect blend of people and technology
              </b>{" "}
              We see business as a set of challenges and solutions. We don't
              like technology over the human mind. Instead, the right solution
              determines the right balance. For us, it takes the perfect mix of
              highly talented people, technology, and data to produce
              tremendously impressive results.{" "}
              <b className={`${styles.blackBold}`}>Visionary culture</b> Our
              environment is a direct reflection of our people as a collective
              spirit dedicated to supporting our customers while positively
              impacting the world around us. Refreshing, intelligent, creative,
              and transparent. This is Dheefside; our strengths and differences
              are people, processes, and technology.
            </p>
          </div>
          <div>
            <img
              src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration1.svg"
              alt="about"
              className="w-[35rem] h-full"
            />
          </div>
        </div>
        <div>{svg.lines}</div>
        <OursAbout />
        <hr className="mt-8" />
      </div>
    </motion.section>
  );
}
