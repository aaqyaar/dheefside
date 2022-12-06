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
        navigate(PATH.user.profile);
      }
      if (error) {
        toast.error(error);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <section className="grid grid-cols-12 h-[80vh] justify-items-center place-items-center place-content-center">
      <div className={`col-span-12`}>
        <div
          className={`col-span-12 flex flex-col items-center justify-center space-y-2 mt-8`}
        >
          <h1 className="text-4xl font-bold text-secondary">Login</h1>
          <p className="text-gray-400">Login to your account</p>
        </div>
        <LoginForm onLogin={handleLogin} />
      </div>
    </section>
  );
}
