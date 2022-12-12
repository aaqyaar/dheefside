import { HiStar } from "react-icons/hi";
import { responsiveSettings } from "utils/carousel-settings";
import SliderProvider from "utils/SliderProvider";

export default function Testimonials() {
  return (
    <div className="bg-gray-100 font-poppins">
      <div className="max-w-screen-2xl mx-auto px-4 py-20">
        <div className="flex flex-row justify-center items-center space-x-4">
          <h1 className="lg:text-5xl md:text-4xl text-3xl prose font-bold text-gray-600">
            What our <span className="text-secondary"> Happy clients</span> say
            about us.
          </h1>
          <p className="text-4xl text-gray-600 animate-bounce">👇</p>
        </div>
        <SliderProvider settings={responsiveSettings} className="mt-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col rounded-md bg-white shadow-2xl shadow-indigo-50 justify-center items-center space-y-4"
            >
              <div className="flex flex-col m-4">
                {/* rating star */}
                <div className="flex justify-start items-start space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <HiStar className="text-primaryGreen" key={i} />
                  ))}
                </div>

                <p className="text-gray-600 py-4">
                  <q>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quisquam, quod.
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
                      Abdi Zamed Mohaed Mohaed Mohaed Mohaed
                    </h1>
                    <p className="text-gray-400">CEO, Dheefside</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </SliderProvider>
      </div>
    </div>
  );
}
