import React from "react";

export default function Timeline() {
  return (
    <>
      <div className="container mx-auto w-full h-full mb-8">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>

          {data.map((item, i) => (
            <div
              key={item.id}
              className={`mb-8 flex justify-between  ${
                item.type === "right" ? "flex-row-reverse" : "flex-row"
              } items-center w-full`}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-secondary shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  {i + 1}
                </h1>
              </div>
              <div className="order-1 bg-secondary rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-100 text-xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-200 text-opacity-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const data = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    type: "right",
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    type: "left",
  },
  {
    id: 3,
    title: "Our Values",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    type: "right",
  },
];
