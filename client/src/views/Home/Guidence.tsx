import { motion } from "framer-motion";
import {
  textContainer,
  textVariant2,
  staggerContainer,
} from "components/animate";

export default function Guidence() {
  return (
    <motion.div
      variants={staggerContainer as any}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="bg-secondary w-full h-fit p-10"
    >
      <div className="bg-white w-full h-fit p-10 rounded-lg">
        <div className="flex justify-center flex-col items-center">
          {/* <h1 className="text-4xl text-gray-700 font-bold">
            Get Guidance for Your Startup with the Dheefside
          </h1> */}

          <TypingText
            title="Get Guidance for Your Startup with the Dheefside"
            textStyles="text-4xl text-gray-700 font-bold"
          />
          <TitleText
            title="We are the proven network to turn your innovative ideas into
            startups and startups into established companies."
            textStyles="text-gray-700 text-center text-xl"
          />

          {/* <p className="text-gray-700 text-center text-xl">
            We are the proven network to turn your innovative ideas into
            startups and startups into established companies.
          </p> */}
        </div>
      </div>
    </motion.div>
  );
}

export const TypingText = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles: string;
}) => (
  <motion.p
    variants={textContainer}
    whileInView={"show"}
    className={`${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles: string;
}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`${textStyles}`}
  >
    <span dangerouslySetInnerHTML={{ __html: title }} />
  </motion.h2>
);
