import { useAuth } from "contexts/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PATH } from "routes/paths";
import RegisterForm from "./RegisterForm";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleRegister = async (values: any) => {
    try {
      const { data, error } = await register(values);
      if (data) {
        navigate(PATH.auth.login);
      }
      if (error) {
        toast.error(error);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <section className="grid grid-cols-12 justify-items-center place-content-center">
      <RegisterForm onRegister={handleRegister} />
    </section>
  );
}
