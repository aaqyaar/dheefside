import styles from "styles/style";
import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <section className="h-[90vh] w-full">
      <div className={`${styles.flexCol} items-center justify-center h-full`}>
        <div
          className={`${styles.flexCol} items-center justify-center space-y-4`}
        >
          <h1 className="text-2xl font-bold">Register</h1>
          <p className="text-gray-400">Create a new account</p>
        </div>

        <RegisterForm />
      </div>
    </section>
  );
}
