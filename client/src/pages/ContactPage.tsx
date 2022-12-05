import svg from "constants/svg-exports";

export default function ContactPage() {
  return (
    <section className="h-screen">
      <div className="container mx-auto px-6 py-20">
        <div className="flex items-center justify-center flex-col my-4">
          <h2 className="text-5xl font-extrabold text-secondary mb-8">
            Contact Us
          </h2>
          <p className="prose text-center text-lg">
            <span className="font-bold text-primary">
              We’ll Be Glad To Assist You!
            </span>{" "}
            Caring and satisfying our customers with the best services is what
            we stand for.
          </p>
          <div>{svg.undeline2}</div>
        </div>
        <div className="flex flex-col justify-center items-center"></div>
      </div>
    </section>
  );
}
