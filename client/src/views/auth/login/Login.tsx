import { useState } from "react";
import { Button } from "components";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import styles from "styles/style";
import { Link } from "react-router-dom";
import { PATH } from "routes";

export default function Login() {
  const [showPasword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPasword);
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
        <div className={`${styles.flexCol} items-center space-y-4 mt-8`}>
          <div className={`${styles.flexCol} items-start  space-y-4`}>
            <label htmlFor="email" className="text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-96 h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600"
            />
          </div>
          <div className={`${styles.flexCol} items-start space-y-4`}>
            <label htmlFor="password" className="text-gray-400">
              Password
            </label>
            <div className={`${styles.flexRow} relative items-center`}>
              <input
                type={showPasword ? "text" : "password"}
                name="password"
                id="password"
                className="w-96 h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600"
              />
              <button className="absolute right-4" onClick={handleShowPassword}>
                {showPasword ? (
                  <HiOutlineEye className="text-2xl text-gray-400" />
                ) : (
                  <HiOutlineEyeOff className="text-2xl text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <div className={`${styles.flexItemsCenter} justify-between w-full`}>
            <div className={`${styles.flexItemsCenter} gap-2`}>
              <input type="checkbox" className="rounded" />
              <label htmlFor="" className="text-gray-400">
                Remember me
              </label>
            </div>

            <span>
              <Link to={PATH.auth.forgotPassword} className="text-indigo-600">
                Forgot password?
              </Link>
            </span>
          </div>
          <div
            className={`${styles.flexCol} items-center justify-center space-y-4`}
          >
            <Button className="w-96 h-12">Login</Button>
          </div>

          <div
            className={`${styles.flexCol} items-center justify-between space-y-4`}
          >
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link
                to={PATH.auth.register}
                className="text-indigo-600 font-bold cursor-pointer"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
