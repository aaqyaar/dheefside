import { Button } from "components";
import svg from "constants/svg-exports";
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
          <Button size="lg" variant="contained" className="py-4 px-5">
            Book A Demo
          </Button>
        </div>

        <div>{svg.upArrow}</div>
      </div>

      <div className="absolute right-2 top-10">{svg.gridOffset}</div>
    </section>
  );
}
