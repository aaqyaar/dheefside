import { Grid } from "components";
import { useAuth } from "contexts/AuthContext";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "routes/paths";
import RegisterForm from "./RegisterForm";

export default function Register() {
  const navigate = useNavigate();
  const { register, loading } = useAuth();

  const handleRegister = async (values: any) => {
    const res = await register(values);
    if (res?.data) {
      navigate(PATH.auth.login);
    }

    if (res?.error) {
      toast.error(res?.error?.message);
    }
  };
  return (
    <section
      // className={`max-w-7xl mx-auto grid grid-cols-12 h-full mt-32 place-content-center`}
      className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[90vh] lg:py-0"
    >
      <Grid container lg={12}>
        <div className="col-span-12 lg:col-span-6 mx-4 text-center">
          <h1 className="text-4xl font-bold text-secondary">Register</h1>
          <p className="text-gray-400">Register to your account</p>
          <RegisterForm onRegister={handleRegister} loading={loading} />

          <p className="text-gray-400">
            Already have an account?{" "}
            <Link to={PATH.auth.login} className="text-secondary">
              Login
            </Link>
            {" or "}
            <Link to={PATH.auth.forgotPassword} className="text-secondary">
              Forgot Password
            </Link>
          </p>
        </div>

        <div className="lg:col-span-6 mx-4 col-span-12">
          <img
            src="/images/register-illustration.svg"
            alt="Registration Illustration"
            className="w-full"
          />
        </div>
      </Grid>
    </section>
  );
}
