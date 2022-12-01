import styles from "styles/style";
import { About, Clients, Guidence, Hero, Services, Testimonials } from "views";

export default function Home() {
  return (
    <>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <Guidence />
      <About />
      <Services />
      <Clients />
      <Testimonials />
    </>
  );
}
