import { useState } from "react";
import { FormikProvider, Form, useFormik } from "formik";
import { loginYupSchema } from "validations";
import styles from "styles/style";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Button } from "components";
import { PATH } from "routes/paths";
import TextField, { ITextField } from "components/TextField";

type Props = {};

const initialState = {
  email: "",
  password: "",
};

export default function LoginForm({}: Props) {
  const [showPasword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPasword);
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: loginYupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, errors, touched, getFieldProps, handleSubmit } = formik;

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={handleSubmit} noValidate autoComplete="off">
        <div className={`${styles.flexCol} items-center space-y-4 mt-8`}>
          <div className={`${styles.flexCol} items-start  space-y-4`}>
            {formFields.map((field: ITextField) => (
              <TextField
                key={field.name}
                label={field.label}
                name={field.name}
                component={field.component}
                className={field.className}
                type={
                  field.type === "password"
                    ? showPasword
                      ? "text"
                      : "password"
                    : field.type
                }
                placeholder={field.placeholder}
                onChange={field.onChange}
                errors={errors}
                touched={touched}
                getFieldProps={getFieldProps}
                endIcon={
                  field.type === "password" ? (
                    showPasword ? (
                      <HiOutlineEye
                        className="cursor-pointer"
                        onClick={() => handleShowPassword()}
                      />
                    ) : (
                      <HiOutlineEyeOff
                        className="cursor-pointer"
                        onClick={() => handleShowPassword()}
                      />
                    )
                  ) : null
                }
                startIcon={field.startIcon}
              />
            ))}
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
      </Form>
    </FormikProvider>
  );
}

const formFields: ITextField[] = [
  {
    label: "Email",
    name: "email",
    component: "input",
    type: "email",
  },
  {
    label: "Password",
    name: "password",
    component: "input",
    type: "password",
  },
];
