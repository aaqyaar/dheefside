import React from "react";

export default function Clients() {
  return (
    <div className="bg-white w-full h-fit p-10 rounded-lg">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-4xl text-gray-700 font-bold">
          Trusted by the world's best startups
        </h1>
        <p className="text-gray-700 text-center text-xl">
          We are the proven network to turn your innovative ideas into startups
          and startups into established companies.
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap">
        <div className="w-1/4 h-1/4 flex justify-center items-center">
          <img
            src="https://dheefside.com/assets/images/clients/1.png"
            alt="client"
          />
        </div>
        <div className="w-1/4 h-1/4 flex justify-center items-center">
          <img
            src="https://dheefside.com/assets/images/clients/2.png"
            alt="client"
          />
        </div>
      </div>
    </div>
  );
}
