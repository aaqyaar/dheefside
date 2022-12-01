import React from "react";
import styles from "styles/style";
import { HiStar } from "react-icons/hi";
export default function Testimonials() {
  return (
    <div className="bg-gray-100 font-inter">
      <div className="max-w-[1280px] mx-auto px-8 py-20">
        <div className="flex justify-center items-center space-x-4">
          <h1 className="lg:text-7xl md:text-6xl text-5xl font-bold text-gray-600">
            What our clients say about us
          </h1>
        </div>
        <div
          className={`${styles.marginX} my-4 flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4`}
        >
          {[...Array(3)].map((item) => (
            <div className="flex flex-col bg-white shadow-2xl shadow-indigo-50 justify-center items-center space-y-4">
              <div className="p-10 flex flex-col space-y-2">
                {/* rating star */}
                <div className="flex justify-start items-start space-x-1">
                  {[...Array(5)].map((item) => (
                    <HiStar className="text-indigo-500" />
                  ))}
                </div>

                <p className="text-gray-600">
                  <q>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod.
                  </q>
                </p>

                <div className="flex justify-start items-center space-x-2">
                  <img
                    src="/abdizamed.svg"
                    alt="Abdi Zamed"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col space-y-1">
                    <h1 className="text-gray-600 font-bold">
                      Abdi Zamed Mohaed
                    </h1>
                    <p className="text-gray-400">CEO, Dheefside</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
