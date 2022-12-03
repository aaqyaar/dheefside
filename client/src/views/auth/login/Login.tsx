import { useAuth } from "contexts/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PATH } from "routes/paths";
import styles from "styles/style";
import LoginForm from "./LoginForm";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    try {
      const { data, error } = await login(email, password);
      if (data) {
        navigate(PATH.home);
      }
      if (error) {
        toast.error(error);
      }
    } catch (error) {
      throw new Error(error as any);
    }
  };

  return (
    <section className="h-[90vh] w-full">
      <div className={`${styles.flexCol} items-center justify-center h-full`}>
        <div
          className={`${styles.flexCol} items-center justify-center space-y-4`}
        >
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="text-gray-400">Login to your account</p>
        </div>
        <LoginForm onLogin={handleLogin} />
      </div>
    </section>
  );
}
