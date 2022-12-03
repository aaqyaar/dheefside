import { AUTH_LOCAL_STORAGE } from "constants/app-constants";
import { useNavigate } from "react-router-dom";
import { PATH } from "routes/paths";
import styles from "styles/style";
import { AuthData, useLoginMutation } from "__generated__/generated";
import LoginForm from "./LoginForm";

export default function Login() {
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const handleLogin = async (email: string, password: string) => {
    const { data } = await login({
      variables: {
        email,
        password,
      },
    });
    const { token, user } = data?.login as AuthData;
    localStorage.setItem(AUTH_LOCAL_STORAGE.token, token);
    localStorage.setItem(AUTH_LOCAL_STORAGE.user, JSON.stringify(user));
    navigate(PATH.home);
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
