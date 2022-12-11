import { staggerContainer, zoomIn } from "components/animate";
import { motion } from "framer-motion";
import styles from "styles/style";
import { TitleText, TypingText } from "./Guidence";

const services = [
  {
    id: 1,
    icon: (
      <img
        src="/icons/web-development.svg"
        alt="Web Development"
        className="w-20 h-20"
      />
    ),
    title: "Web Development",
    default: false,
    desc: "We have been developing websites for over 5 years. I have experience with HTML, CSS, JavaScript, React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.",
  },
  {
    id: 2,
    icon: (
      <img
        src="/icons/app-development.svg"
        alt="Mobile APP Development"
        className="w-20 h-20"
      />
    ),
    title: "Mobile APP Development",
    default: true,
    desc: "We have been developing mobile apps for over 5 years. I have experience with React Native, Flutter, Expo, and Firebase.",
  },
  {
    id: 3,
    icon: (
      <img
        src="/icons/marketing-2.svg"
        alt="SEO & Marketing"
        className="w-20 h-20"
      />
    ),
    title: "SEO & Marketing",
    default: false,
    desc: "We have been doing SEO and marketing for over 5 years. I have experience with Google Analytics, Google Search Console, Google Ads, Facebook Ads, and Instagram Ads.",
  },
];

export default function Services() {
  return (
    <section className={`relative bg-white`}>
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView={"show"}
        viewport={{
          once: false,
          amount: 0.25,
        }}
        className={`${styles.boxWidth} px-8 py-20 mx-auto`}
      >
        <div className="flex flex-col items-center justify-center font-poppins py-4">
          <TitleText
            title={`Save Time Managing Your Business <br /> With <span className="text-secondary">Dheefside Services</span>`}
            textStyles="text-4xl font-bold text-center prose"
          />

          <p className="text-lg text-center prose py-4 max-w-lg mx-auto">
            We offer a wide range of services to help you grow your business and
            increase your revenue. Our services are designed to help you save
            time and money.
          </p>

          {/* <TypingText
            title="We offer a wide range of services to help you grow your business and
          increase your revenue. Our services are designed to help you save
          time and money."
            textStyles="text-lg max-w-lg text-center prose py-4"
          /> */}
        </div>
        <div
          className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-content-center place-items-center justify-items-center`}
        >
          {services.map((service: any) => renderService(service))}
        </div>
      </motion.div>
    </section>
  );
}

function renderService(service: any) {
  return (
    <motion.div
      variants={zoomIn(0.5, 1)}
      key={service.id}
      className={`${
        service.id === 2 && "shadow-2xl shadow-gray-300"
      } max-w-sm bg-white duration-150 transition ease-in hover:shadow-2xl hover:shadow-gray-300 px-2 py-10 rounded-md font-poppins`}
    >
      <div className=" flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center justify-center p-4">
          {service.icon}
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-800">
          {service.title}
        </h1>
        <p className="line-clamp-4 max-w-md text-lg text-center text-gray-600">
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
}
