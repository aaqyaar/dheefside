import styles from "styles/style";
import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <section className="lg:py-16 py-10">
      <div className={`${styles.flexCenter} flex-col space-y-2`}>
        <h1 className="text-3xl text-indigo-600 font-bold">Register</h1>
        <p className="text-gray-400 text-center">
          Register to create your account and start <br /> using our services
          for free !
        </p>
      </div>
      <div className={`${styles.flexCenter}`}>
        <RegisterForm />
      </div>
    </section>
  );
}
