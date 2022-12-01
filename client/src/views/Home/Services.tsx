import styles from "styles/style";
import { FaCode } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const services = [
  {
    id: 1,
    icon: <FaCode className="text-sky-500 w-16 h-16" />,
    title: "Web Development",
    default: false,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
  },
  {
    id: 2,
    icon: <HiOutlineMail className="w-16 h-16 text-yellow-500" />,
    title: "Web Development",
    default: true,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
  },
  {
    id: 3,
    icon: <FaCode className="w-16 h-16" />,
    title: "Web Development",
    default: false,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
  },
];

export default function Services() {
  return (
    <section className={`${styles.paddingY} bg-gray-200/70`}>
      <div className="flex flex-col items-center justify-center font-poppins py-4">
        <h1 className="text-4xl font-bold text-center prose">
          Save Time Managing Your Business
          <br />
          With <span className="text-indigo-600">Dheefside Services</span>
        </h1>
        <p className="text-lg text-center prose py-4">
          We offer a wide range of services to help you grow your business and
          increase your revenue. Our services are designed to help you save time
          and money.
        </p>
      </div>
      <div
        className={`${styles.marginX} flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4`}
      >
        {services.map((service: any) => renderService(service))}
      </div>
    </section>
  );
}

function renderService(service: any) {
  return (
    <div
      key={service.id}
      className={`max-w-sm bg-white hover:shadow-2xl hover:shadow-gray-300 px-2 py-10 rounded-md font-poppins`}
    >
      <div className=" flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center justify-center p-4">
          {service.icon}
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-800">
          {service.title}
        </h1>
        <p id="limit" className="max-w-md text-lg text-center text-gray-600">
          {service.desc}
        </p>

        <style>{`
          #limit {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;

          }
        `}</style>
      </div>
    </div>
  );
}
