import styles from "styles/style";
import { About, Guidence, Hero, Services } from "views";

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
      {/* <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer /> */}
    </>
  );
}
