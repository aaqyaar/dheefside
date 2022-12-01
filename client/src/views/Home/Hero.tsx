import { Button } from "components";
import styles from "styles/style";

export default function Hero() {
  return (
    <section className="text-black">
      {/* align all items center vertically and horizantally */}
      <div className={`${styles.paddingY} sm:${styles.paddingX}`}>
        <h1 className={`lg:text-8xl md:text-5xl text-4xl font-extrabold prose`}>
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
            variant="contained"
            className="bg-[#3c50e0] py-4 px-5"
            onClick={() => console.log("clicked")}
          >
            Book A Demo
          </Button>
        </div>

        <div>
          <svg
            className="w-20 h-20"
            viewBox="0 0 162 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.913757 114.53C13.9807 116.216 32.3056 122.378 43.7012 113.083C51.0025 107.128 57.0714 99.6064 62.6869 92.0921C73.647 77.4257 81.4769 57.0014 83.9262 38.9656C86.7749 17.9886 65.2558 22.4197 58.3958 36.6239C48.6178 56.8698 53.4826 94.2165 79.0133 100.444C108.309 107.591 123.562 71.7844 130.096 49.9154C134.773 34.2631 153.849 -9.9389 143.644 2.81731C137.309 10.736 128.12 15.6577 122.008 23.6058C118.81 27.7641 121.911 27.9558 125.382 25.0963C131.067 20.4118 136.477 14.6482 140.667 8.60318C141.379 7.57589 145.275 0.763508 146.837 3.12604C151.902 10.7886 153.525 20.5514 158.568 28.4832"
              stroke="currentColor"
              stroke-width="2"
              strokeLinecap="round"
            ></path>
            <path
              d="M132.848 24.4348C141.945 26.8851 150.961 28.4036 160.05 30.4235C162.841 31.0437 159.046 30.7305 158.171 30.7851"
              stroke="currentColor"
              stroke-width="2"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
      </div>

      <div className="absolute top-20 left-5">
        <svg
          className="w-20 h-20 animate-ping"
          viewBox="0 0 76 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M76 50.2015L38.3 12.5015C37.2 12.6015 36.1 12.8015 35 13.1015L75.5 53.6015C75.7 52.4015 75.9 51.3015 76 50.2015Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M66.2996 22.2015C63.1996 19.1015 59.5996 16.7015 55.5996 15.0015L73.5996 33.0015C71.7996 28.9015 69.3996 25.3015 66.2996 22.2015Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M18.0998 70.3015C21.1998 73.4015 24.7998 75.8015 28.7998 77.5015L10.7998 59.5015C12.5998 63.6015 14.9998 67.2015 18.0998 70.3015Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M62.2996 73.7016L14.6996 26.1016C14.1996 26.8016 13.5996 27.6016 13.0996 28.4016L59.8996 75.2016C60.7996 74.8016 61.5996 74.3016 62.2996 73.7016Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M49.3998 79.5015L8.8998 39.0015C8.6998 40.1015 8.4998 41.2015 8.2998 42.3015L46.0998 80.1015C47.1998 80.0015 48.2998 79.8015 49.3998 79.5015Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M71.1996 64.0017L24.3996 17.2017C23.5996 17.7017 22.7996 18.2017 22.0996 18.8017L69.6996 66.4017C70.1996 65.6017 70.6996 64.8017 71.1996 64.0017Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M67.7002 38.4017L30.0002 0.70166C28.9002 0.80166 27.8002 1.00165 26.7002 1.30165L67.1002 41.8017C67.3002 40.7017 67.5002 39.6017 67.7002 38.4017Z"
            fill="currentColor"
          ></path>
          <path
            d="M67.7002 38.4017L30.0002 0.70166C28.9002 0.80166 27.8002 1.00165 26.7002 1.30165L67.1002 41.8017C67.3002 40.7017 67.5002 39.6017 67.7002 38.4017Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M57.9002 10.5018C54.8002 7.40177 51.2002 5.00176 47.2002 3.30176L65.2002 21.3018C63.5002 17.2018 61.0002 13.6018 57.9002 10.5018Z"
            fill="currentColor"
          ></path>
          <path
            d="M57.9002 10.5018C54.8002 7.40177 51.2002 5.00176 47.2002 3.30176L65.2002 21.3018C63.5002 17.2018 61.0002 13.6018 57.9002 10.5018Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M9.8 58.6018C12.9 61.7018 16.5 64.1018 20.5 65.8018L2.5 47.8018C4.2 51.9018 6.7 55.5018 9.8 58.6018Z"
            fill="currentColor"
          ></path>
          <path
            d="M9.8 58.6018C12.9 61.7018 16.5 64.1018 20.5 65.8018L2.5 47.8018C4.2 51.9018 6.7 55.5018 9.8 58.6018Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M53.9002 62.0019L6.30019 14.4019C5.80019 15.1019 5.2002 15.9019 4.7002 16.7019L51.5002 63.5019C52.4002 63.1019 53.2002 62.6019 53.9002 62.0019Z"
            fill="currentColor"
          ></path>
          <path
            d="M53.9002 62.0019L6.30019 14.4019C5.80019 15.1019 5.2002 15.9019 4.7002 16.7019L51.5002 63.5019C52.4002 63.1019 53.2002 62.6019 53.9002 62.0019Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M41.1 67.8018L0.6 27.3018C0.4 28.4018 0.2 29.5018 0 30.6018L37.7 68.3018C38.8 68.2018 40 68.1018 41.1 67.8018Z"
            fill="currentColor"
          ></path>
          <path
            d="M41.1 67.8018L0.6 27.3018C0.4 28.4018 0.2 29.5018 0 30.6018L37.7 68.3018C38.8 68.2018 40 68.1018 41.1 67.8018Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M62.8998 52.3015L16.0998 5.50146C15.2998 6.00146 14.4998 6.50146 13.7998 7.10146L61.3998 54.7015C61.8998 53.9015 62.3998 53.1015 62.8998 52.3015Z"
            fill="currentColor"
          ></path>
          <path
            d="M62.8998 52.3015L16.0998 5.50146C15.2998 6.00146 14.4998 6.50146 13.7998 7.10146L61.3998 54.7015C61.8998 53.9015 62.3998 53.1015 62.8998 52.3015Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
        </svg>
      </div>

      <div className="absolute right-2 top-10">
        {" "}
        <svg
          className="w-40 h-40"
          viewBox="0 0 83 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80.399 4.80029C79.099 4.80029 77.999 3.70028 77.999 2.40028C77.999 1.10028 79.099 0.000289917 80.399 0.000289917C81.699 0.000289917 82.799 1.10028 82.799 2.40028C82.799 3.70028 81.799 4.80029 80.399 4.80029Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M69.399 4.80029C68.099 4.80029 66.999 3.70028 66.999 2.40028C66.999 1.10028 68.099 0.000289917 69.399 0.000289917C70.699 0.000289917 71.799 1.10028 71.799 2.40028C71.799 3.70028 70.699 4.80029 69.399 4.80029Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M58.2994 4.80029C56.9994 4.80029 55.8994 3.70028 55.8994 2.40028C55.8994 1.10028 56.9994 0.000289917 58.2994 0.000289917C59.5994 0.000289917 60.6994 1.10028 60.6994 2.40028C60.6994 3.70028 59.5994 4.80029 58.2994 4.80029Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M47.1988 4.80029C45.8988 4.80029 44.7988 3.70028 44.7988 2.40028C44.7988 1.10028 45.8988 0.000289917 47.1988 0.000289917C48.4988 0.000289917 49.5988 1.10028 49.5988 2.40028C49.5988 3.70028 48.5988 4.80029 47.1988 4.80029Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M36.1988 4.80029C34.8988 4.80029 33.7988 3.70028 33.7988 2.40028C33.7988 1.10028 34.8988 0.000289917 36.1988 0.000289917C37.4988 0.000289917 38.5988 1.10028 38.5988 2.40028C38.5988 3.70028 37.4988 4.80029 36.1988 4.80029Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M25.0992 4.80029C23.7992 4.80029 22.6992 3.70028 22.6992 2.40028C22.6992 1.10028 23.7992 0.000289917 25.0992 0.000289917C26.3992 0.000289917 27.4992 1.10028 27.4992 2.40028C27.4992 3.70028 26.4992 4.80029 25.0992 4.80029Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M14.0992 4.80029C12.7992 4.80029 11.6992 3.70028 11.6992 2.40028C11.6992 1.10028 12.7992 0.000289917 14.0992 0.000289917C15.3992 0.000289917 16.4992 1.10028 16.4992 2.40028C16.4992 3.70028 15.3992 4.80029 14.0992 4.80029Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M80.399 16.2002C79.099 16.2002 77.999 15.1002 77.999 13.8002C77.999 12.5002 79.099 11.4002 80.399 11.4002C81.699 11.4002 82.799 12.5002 82.799 13.8002C82.799 15.1002 81.799 16.2002 80.399 16.2002Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M69.399 16.2002C68.099 16.2002 66.999 15.1002 66.999 13.8002C66.999 12.5002 68.099 11.4002 69.399 11.4002C70.699 11.4002 71.799 12.5002 71.799 13.8002C71.799 15.1002 70.699 16.2002 69.399 16.2002Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M58.2994 16.2002C56.9994 16.2002 55.8994 15.1002 55.8994 13.8002C55.8994 12.5002 56.9994 11.4002 58.2994 11.4002C59.5994 11.4002 60.6994 12.5002 60.6994 13.8002C60.6994 15.1002 59.5994 16.2002 58.2994 16.2002Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M47.1988 16.2002C45.8988 16.2002 44.7988 15.1002 44.7988 13.8002C44.7988 12.5002 45.8988 11.4002 47.1988 11.4002C48.4988 11.4002 49.5988 12.5002 49.5988 13.8002C49.5988 15.1002 48.5988 16.2002 47.1988 16.2002Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M36.1988 16.2002C34.8988 16.2002 33.7988 15.1002 33.7988 13.8002C33.7988 12.5002 34.8988 11.4002 36.1988 11.4002C37.4988 11.4002 38.5988 12.5002 38.5988 13.8002C38.5988 15.1002 37.4988 16.2002 36.1988 16.2002Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M25.0992 16.2002C23.7992 16.2002 22.6992 15.1002 22.6992 13.8002C22.6992 12.5002 23.7992 11.4002 25.0992 11.4002C26.3992 11.4002 27.4992 12.5002 27.4992 13.8002C27.4992 15.1002 26.4992 16.2002 25.0992 16.2002Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M14.0992 16.2002C12.7992 16.2002 11.6992 15.1002 11.6992 13.8002C11.6992 12.5002 12.7992 11.4002 14.0992 11.4002C15.3992 11.4002 16.4992 12.5002 16.4992 13.8002C16.4992 15.1002 15.3992 16.2002 14.0992 16.2002Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M80.399 27.7002C79.099 27.7002 77.999 26.6002 77.999 25.3002C77.999 24.0002 79.099 22.9002 80.399 22.9002C81.699 22.9002 82.799 24.0002 82.799 25.3002C82.799 26.6002 81.799 27.7002 80.399 27.7002Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M69.399 27.7002C68.099 27.7002 66.999 26.6002 66.999 25.3002C66.999 24.0002 68.099 22.9002 69.399 22.9002C70.699 22.9002 71.799 24.0002 71.799 25.3002C71.799 26.6002 70.699 27.7002 69.399 27.7002Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M58.2994 27.7002C56.9994 27.7002 55.8994 26.6002 55.8994 25.3002C55.8994 24.0002 56.9994 22.9002 58.2994 22.9002C59.5994 22.9002 60.6994 24.0002 60.6994 25.3002C60.6994 26.6002 59.5994 27.7002 58.2994 27.7002Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M47.1988 27.7002C45.8988 27.7002 44.7988 26.6002 44.7988 25.3002C44.7988 24.0002 45.8988 22.9002 47.1988 22.9002C48.4988 22.9002 49.5988 24.0002 49.5988 25.3002C49.6988 26.6002 48.5988 27.7002 47.1988 27.7002Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M36.1988 27.7002C34.8988 27.7002 33.7988 26.6002 33.7988 25.3002C33.7988 24.0002 34.8988 22.9002 36.1988 22.9002C37.4988 22.9002 38.5988 24.0002 38.5988 25.3002C38.5988 26.6002 37.4988 27.7002 36.1988 27.7002Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M25.0992 27.7002C23.7992 27.7002 22.6992 26.6002 22.6992 25.3002C22.6992 24.0002 23.7992 22.9002 25.0992 22.9002C26.3992 22.9002 27.4992 24.0002 27.4992 25.3002C27.5992 26.6002 26.4992 27.7002 25.0992 27.7002Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M14.0992 27.7002C12.7992 27.7002 11.6992 26.6002 11.6992 25.3002C11.6992 24.0002 12.7992 22.9002 14.0992 22.9002C15.3992 22.9002 16.4992 24.0002 16.4992 25.3002C16.4992 26.6002 15.3992 27.7002 14.0992 27.7002Z"
            fill="#9D9D9D"
          ></path>
          <path
            d="M68.6998 13.1001C67.3998 13.1001 66.2998 12.0001 66.2998 10.7001C66.2998 9.4001 67.3998 8.30011 68.6998 8.30011C69.9998 8.30011 71.0998 9.4001 71.0998 10.7001C71.0998 12.0001 69.9998 13.1001 68.6998 13.1001Z"
            fill="currentColor"
          ></path>
          <path
            d="M68.6998 13.1001C67.3998 13.1001 66.2998 12.0001 66.2998 10.7001C66.2998 9.4001 67.3998 8.30011 68.6998 8.30011C69.9998 8.30011 71.0998 9.4001 71.0998 10.7001C71.0998 12.0001 69.9998 13.1001 68.6998 13.1001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M57.6002 13.1001C56.3002 13.1001 55.2002 12.0001 55.2002 10.7001C55.2002 9.4001 56.3002 8.30011 57.6002 8.30011C58.9002 8.30011 60.0002 9.4001 60.0002 10.7001C60.0002 12.0001 59.0002 13.1001 57.6002 13.1001Z"
            fill="currentColor"
          ></path>
          <path
            d="M57.6002 13.1001C56.3002 13.1001 55.2002 12.0001 55.2002 10.7001C55.2002 9.4001 56.3002 8.30011 57.6002 8.30011C58.9002 8.30011 60.0002 9.4001 60.0002 10.7001C60.0002 12.0001 59.0002 13.1001 57.6002 13.1001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M46.6002 13.1001C45.3002 13.1001 44.2002 12.0001 44.2002 10.7001C44.2002 9.4001 45.3002 8.30011 46.6002 8.30011C47.9002 8.30011 49.0002 9.4001 49.0002 10.7001C49.0002 12.0001 47.9002 13.1001 46.6002 13.1001Z"
            fill="currentColor"
          ></path>
          <path
            d="M46.6002 13.1001C45.3002 13.1001 44.2002 12.0001 44.2002 10.7001C44.2002 9.4001 45.3002 8.30011 46.6002 8.30011C47.9002 8.30011 49.0002 9.4001 49.0002 10.7001C49.0002 12.0001 47.9002 13.1001 46.6002 13.1001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M35.4996 13.1001C34.1996 13.1001 33.0996 12.0001 33.0996 10.7001C33.0996 9.4001 34.1996 8.30011 35.4996 8.30011C36.7996 8.30011 37.8996 9.4001 37.8996 10.7001C37.8996 12.0001 36.8996 13.1001 35.4996 13.1001Z"
            fill="currentColor"
          ></path>
          <path
            d="M35.4996 13.1001C34.1996 13.1001 33.0996 12.0001 33.0996 10.7001C33.0996 9.4001 34.1996 8.30011 35.4996 8.30011C36.7996 8.30011 37.8996 9.4001 37.8996 10.7001C37.8996 12.0001 36.8996 13.1001 35.4996 13.1001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M24.4996 13.1001C23.1996 13.1001 22.0996 12.0001 22.0996 10.7001C22.0996 9.4001 23.1996 8.30011 24.4996 8.30011C25.7996 8.30011 26.8996 9.4001 26.8996 10.7001C26.8996 12.0001 25.7996 13.1001 24.4996 13.1001Z"
            fill="currentColor"
          ></path>
          <path
            d="M24.4996 13.1001C23.1996 13.1001 22.0996 12.0001 22.0996 10.7001C22.0996 9.4001 23.1996 8.30011 24.4996 8.30011C25.7996 8.30011 26.8996 9.4001 26.8996 10.7001C26.8996 12.0001 25.7996 13.1001 24.4996 13.1001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M13.4 13.1001C12.1 13.1001 11 12.0001 11 10.7001C11 9.4001 12.1 8.30011 13.4 8.30011C14.7 8.30011 15.8 9.4001 15.8 10.7001C15.8 12.0001 14.8 13.1001 13.4 13.1001Z"
            fill="currentColor"
          ></path>
          <path
            d="M13.4 13.1001C12.1 13.1001 11 12.0001 11 10.7001C11 9.4001 12.1 8.30011 13.4 8.30011C14.7 8.30011 15.8 9.4001 15.8 10.7001C15.8 12.0001 14.8 13.1001 13.4 13.1001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M2.39999 13.1001C1.09999 13.1001 0 12.0001 0 10.7001C0 9.4001 1.09999 8.30011 2.39999 8.30011C3.69999 8.30011 4.79999 9.4001 4.79999 10.7001C4.79999 12.0001 3.69999 13.1001 2.39999 13.1001Z"
            fill="currentColor"
          ></path>
          <path
            d="M2.39999 13.1001C1.09999 13.1001 0 12.0001 0 10.7001C0 9.4001 1.09999 8.30011 2.39999 8.30011C3.69999 8.30011 4.79999 9.4001 4.79999 10.7001C4.79999 12.0001 3.69999 13.1001 2.39999 13.1001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M68.6998 24.6001C67.3998 24.6001 66.2998 23.5001 66.2998 22.2001C66.2998 20.9001 67.3998 19.8001 68.6998 19.8001C69.9998 19.8001 71.0998 20.9001 71.0998 22.2001C71.0998 23.5001 69.9998 24.6001 68.6998 24.6001Z"
            fill="currentColor"
          ></path>
          <path
            d="M68.6998 24.6001C67.3998 24.6001 66.2998 23.5001 66.2998 22.2001C66.2998 20.9001 67.3998 19.8001 68.6998 19.8001C69.9998 19.8001 71.0998 20.9001 71.0998 22.2001C71.0998 23.5001 69.9998 24.6001 68.6998 24.6001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M57.6002 24.6001C56.3002 24.6001 55.2002 23.5001 55.2002 22.2001C55.2002 20.9001 56.3002 19.8001 57.6002 19.8001C58.9002 19.8001 60.0002 20.9001 60.0002 22.2001C60.1002 23.5001 59.0002 24.6001 57.6002 24.6001Z"
            fill="currentColor"
          ></path>
          <path
            d="M57.6002 24.6001C56.3002 24.6001 55.2002 23.5001 55.2002 22.2001C55.2002 20.9001 56.3002 19.8001 57.6002 19.8001C58.9002 19.8001 60.0002 20.9001 60.0002 22.2001C60.1002 23.5001 59.0002 24.6001 57.6002 24.6001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M46.6002 24.6001C45.3002 24.6001 44.2002 23.5001 44.2002 22.2001C44.2002 20.9001 45.3002 19.8001 46.6002 19.8001C47.9002 19.8001 49.0002 20.9001 49.0002 22.2001C49.0002 23.5001 47.9002 24.6001 46.6002 24.6001Z"
            fill="currentColor"
          ></path>
          <path
            d="M46.6002 24.6001C45.3002 24.6001 44.2002 23.5001 44.2002 22.2001C44.2002 20.9001 45.3002 19.8001 46.6002 19.8001C47.9002 19.8001 49.0002 20.9001 49.0002 22.2001C49.0002 23.5001 47.9002 24.6001 46.6002 24.6001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M35.4996 24.6001C34.1996 24.6001 33.0996 23.5001 33.0996 22.2001C33.0996 20.9001 34.1996 19.8001 35.4996 19.8001C36.7996 19.8001 37.8996 20.9001 37.8996 22.2001C37.9996 23.5001 36.8996 24.6001 35.4996 24.6001Z"
            fill="currentColor"
          ></path>
          <path
            d="M35.4996 24.6001C34.1996 24.6001 33.0996 23.5001 33.0996 22.2001C33.0996 20.9001 34.1996 19.8001 35.4996 19.8001C36.7996 19.8001 37.8996 20.9001 37.8996 22.2001C37.9996 23.5001 36.8996 24.6001 35.4996 24.6001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M24.4996 24.6001C23.1996 24.6001 22.0996 23.5001 22.0996 22.2001C22.0996 20.9001 23.1996 19.8001 24.4996 19.8001C25.7996 19.8001 26.8996 20.9001 26.8996 22.2001C26.8996 23.5001 25.7996 24.6001 24.4996 24.6001Z"
            fill="currentColor"
          ></path>
          <path
            d="M24.4996 24.6001C23.1996 24.6001 22.0996 23.5001 22.0996 22.2001C22.0996 20.9001 23.1996 19.8001 24.4996 19.8001C25.7996 19.8001 26.8996 20.9001 26.8996 22.2001C26.8996 23.5001 25.7996 24.6001 24.4996 24.6001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M13.4 24.6001C12.1 24.6001 11 23.5001 11 22.2001C11 20.9001 12.1 19.8001 13.4 19.8001C14.7 19.8001 15.8 20.9001 15.8 22.2001C15.9 23.5001 14.8 24.6001 13.4 24.6001Z"
            fill="currentColor"
          ></path>
          <path
            d="M13.4 24.6001C12.1 24.6001 11 23.5001 11 22.2001C11 20.9001 12.1 19.8001 13.4 19.8001C14.7 19.8001 15.8 20.9001 15.8 22.2001C15.9 23.5001 14.8 24.6001 13.4 24.6001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M2.39999 24.6001C1.09999 24.6001 0 23.5001 0 22.2001C0 20.9001 1.09999 19.8001 2.39999 19.8001C3.69999 19.8001 4.79999 20.9001 4.79999 22.2001C4.79999 23.5001 3.69999 24.6001 2.39999 24.6001Z"
            fill="currentColor"
          ></path>
          <path
            d="M2.39999 24.6001C1.09999 24.6001 0 23.5001 0 22.2001C0 20.9001 1.09999 19.8001 2.39999 19.8001C3.69999 19.8001 4.79999 20.9001 4.79999 22.2001C4.79999 23.5001 3.69999 24.6001 2.39999 24.6001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M68.6998 36.1001C67.3998 36.1001 66.2998 35.0001 66.2998 33.7001C66.2998 32.4001 67.3998 31.3001 68.6998 31.3001C69.9998 31.3001 71.0998 32.4001 71.0998 33.7001C71.0998 35.0001 69.9998 36.1001 68.6998 36.1001Z"
            fill="currentColor"
          ></path>
          <path
            d="M68.6998 36.1001C67.3998 36.1001 66.2998 35.0001 66.2998 33.7001C66.2998 32.4001 67.3998 31.3001 68.6998 31.3001C69.9998 31.3001 71.0998 32.4001 71.0998 33.7001C71.0998 35.0001 69.9998 36.1001 68.6998 36.1001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M57.6002 36.1001C56.3002 36.1001 55.2002 35.0001 55.2002 33.7001C55.2002 32.4001 56.3002 31.3001 57.6002 31.3001C58.9002 31.3001 60.0002 32.4001 60.0002 33.7001C60.1002 35.0001 59.0002 36.1001 57.6002 36.1001Z"
            fill="currentColor"
          ></path>
          <path
            d="M57.6002 36.1001C56.3002 36.1001 55.2002 35.0001 55.2002 33.7001C55.2002 32.4001 56.3002 31.3001 57.6002 31.3001C58.9002 31.3001 60.0002 32.4001 60.0002 33.7001C60.1002 35.0001 59.0002 36.1001 57.6002 36.1001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M46.6002 36.1001C45.3002 36.1001 44.2002 35.0001 44.2002 33.7001C44.2002 32.4001 45.3002 31.3001 46.6002 31.3001C47.9002 31.3001 49.0002 32.4001 49.0002 33.7001C49.0002 35.0001 47.9002 36.1001 46.6002 36.1001Z"
            fill="currentColor"
          ></path>
          <path
            d="M46.6002 36.1001C45.3002 36.1001 44.2002 35.0001 44.2002 33.7001C44.2002 32.4001 45.3002 31.3001 46.6002 31.3001C47.9002 31.3001 49.0002 32.4001 49.0002 33.7001C49.0002 35.0001 47.9002 36.1001 46.6002 36.1001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M35.4996 36.1001C34.1996 36.1001 33.0996 35.0001 33.0996 33.7001C33.0996 32.4001 34.1996 31.3001 35.4996 31.3001C36.7996 31.3001 37.8996 32.4001 37.8996 33.7001C37.9996 35.0001 36.8996 36.1001 35.4996 36.1001Z"
            fill="currentColor"
          ></path>
          <path
            d="M35.4996 36.1001C34.1996 36.1001 33.0996 35.0001 33.0996 33.7001C33.0996 32.4001 34.1996 31.3001 35.4996 31.3001C36.7996 31.3001 37.8996 32.4001 37.8996 33.7001C37.9996 35.0001 36.8996 36.1001 35.4996 36.1001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M24.4996 36.1001C23.1996 36.1001 22.0996 35.0001 22.0996 33.7001C22.0996 32.4001 23.1996 31.3001 24.4996 31.3001C25.7996 31.3001 26.8996 32.4001 26.8996 33.7001C26.8996 35.0001 25.7996 36.1001 24.4996 36.1001Z"
            fill="currentColor"
          ></path>
          <path
            d="M24.4996 36.1001C23.1996 36.1001 22.0996 35.0001 22.0996 33.7001C22.0996 32.4001 23.1996 31.3001 24.4996 31.3001C25.7996 31.3001 26.8996 32.4001 26.8996 33.7001C26.8996 35.0001 25.7996 36.1001 24.4996 36.1001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M13.4 36.1001C12.1 36.1001 11 35.0001 11 33.7001C11 32.4001 12.1 31.3001 13.4 31.3001C14.7 31.3001 15.8 32.4001 15.8 33.7001C15.9 35.0001 14.8 36.1001 13.4 36.1001Z"
            fill="currentColor"
          ></path>
          <path
            d="M13.4 36.1001C12.1 36.1001 11 35.0001 11 33.7001C11 32.4001 12.1 31.3001 13.4 31.3001C14.7 31.3001 15.8 32.4001 15.8 33.7001C15.9 35.0001 14.8 36.1001 13.4 36.1001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
          <path
            d="M2.39999 36.1001C1.09999 36.1001 0 35.0001 0 33.7001C0 32.4001 1.09999 31.3001 2.39999 31.3001C3.69999 31.3001 4.79999 32.4001 4.79999 33.7001C4.79999 35.0001 3.69999 36.1001 2.39999 36.1001Z"
            fill="currentColor"
          ></path>
          <path
            d="M2.39999 36.1001C1.09999 36.1001 0 35.0001 0 33.7001C0 32.4001 1.09999 31.3001 2.39999 31.3001C3.69999 31.3001 4.79999 32.4001 4.79999 33.7001C4.79999 35.0001 3.69999 36.1001 2.39999 36.1001Z"
            fill="currentColor"
            fill-opacity="0.2"
          ></path>
        </svg>
      </div>
    </section>
  );
}
