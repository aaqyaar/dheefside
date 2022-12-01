import { Button } from "components";
import React from "react";
import styles from "styles/style";

export default function About() {
  return (
    <section className={`bg-gray-100 ${styles.paddingX} relative`}>
      <div className={`px-6 py-20`}>
        {/* grid */}
        <div
          className={`grid lg:grid-cols-12 place-items-center gap-y-4 lg:gap-y-0`}
        >
          {/* left */}
          <div className={`lg:col-span-6 col-span-12`}>
            <img
              src="https://cdn.create.vista.com/api/media/medium/350875252/stock-photo-developer-planning-project-user-experience?token="
              alt="developer planning project user experience"
              className={`h-[27rem] rounded-lg w-[20rem] shadow`}
            />
          </div>
          {/* right */}
          <div className={`col-span-12 lg:col-span-6`}>
            <h1 className={`text-5xl text-gray-700 font-bold`}>About Us</h1>

            <svg
              className="w-42 h-10"
              viewBox="0 0 159 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 34.6973C16.8143 36.5547 28.4719 36.9972 43.1509 31.4189C51.2774 28.3306 60.0855 23.2889 65.6853 16.4946C66.4969 15.5098 76.1839 3.10366 72.6156 1.31962C68.8476 -0.564293 64.3641 6.40024 62.5534 8.63801C56.5556 16.0506 46.1268 35.1814 63.214 36.1775C75.0659 36.8684 86.6706 30.7515 97.5049 26.7581C117.164 19.5121 136.732 15.0372 157.456 12.0724"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              ></path>
            </svg>

            <p className={`text-gray-700 text-2xl my-4`}>
              From digital customer experience to trust and safety, AI services,
              and consulting, we believe we are responsible for supporting our
              partner's success in protecting their interests through innovation
              and technology.
              {/* blockquote */}
            </p>
            <blockquote className={`my-4 text-xl`}>
              <q>
                We protect what matters most to us, you, and citizens worldwide.
              </q>
            </blockquote>

            <div className="mt-2">
              <Button className="bg-white text-black/95 hover:bg-gray-50">
                Learn more......
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// grid-cols-1 md:grid-cols-2
// col-span-12 lg:mr-auto lg:col-span-7
// col-span-12 lg:col-span-5 lg:mr-auto
