import styles from "styles/style";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <section className="h-[90vh] w-full">
      <div className={`${styles.flexCol} items-center justify-center h-full`}>
        <div
          className={`${styles.flexCol} items-center justify-center space-y-4`}
        >
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="text-gray-400">Login to your account</p>
        </div>
        <LoginForm />
      </div>
    </section>
  );
}