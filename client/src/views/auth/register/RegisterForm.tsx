import { useState } from "react";
import { FormikProvider, Form, useFormik } from "formik";
import { registerYupSchema } from "validations";
import { Button, TextField } from "components";
import { ITextField } from "components/TextField";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import styles from "styles/style";
import { Link } from "react-router-dom";
import { PATH } from "routes/paths";

const initialState = {
  email: "",
  password: "",
  company: "",
  name: "",
  phone: "",
};

export default function RegisterForm({
  onRegister,
}: {
  onRegister: (values: any) => void;
}) {
  const [showPasword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPasword);
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: registerYupSchema,
    onSubmit: (values, { resetForm }) => {
      const { confirmPassword, ...restValues }: any = values;
      onRegister(restValues);
    },
  });

  const { handleSubmit, touched, errors, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        className="m-4 pt-6 gap-4 grid grid-cols-2 col-span-12"
      >
        <div className="col-span-2 space-y-2 justify-center flex items-center flex-col">
          <h1 className="text-4xl  font-bold text-secondary">
            Create a new account
          </h1>
          <h3 className="prose text-gray-600">
            It's quick and easy. We promise you won't regret it.{" "}
          </h3>
          <div className="flex flex-row items-center gap-4">
            <div className="bg-gray-500 rounded-sm w-40 h-1" />
            <h1>Sign up with</h1>
            <div className="bg-gray-500 w-40 h-1 rounded-sm" />
          </div>
        </div>
        {formFields.map((field: ITextField, i) => (
          <div className={`${field.className} relative`}>
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
              options={field.options}
            />
          </div>
        ))}
        <div className={`col-span-2 justify-end flex`}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="bg-secondary hover:bg-emerald-800 transition ease-in-out hover:-translate-y-1"
          >
            Register
          </Button>
        </div>
        <div className="col-span-2 justify-center flex">
          <h1>
            Already have an account?{" "}
            <Link to={PATH.auth.login} className="text-secondary">
              Login
            </Link>
          </h1>
        </div>
      </Form>
    </FormikProvider>
  );
}

const formFields: ITextField[] = [
  {
    label: "Name",
    name: "name",
    component: "input",
    type: "text",
    className: "col-span-2 lg:col-span-1",
  },
  {
    label: "Email",
    name: "email",
    className: "col-span-2 lg:col-span-1",
    component: "input",
    type: "email",
  },
  {
    label: "Password",
    name: "password",

    className: "col-span-2 lg:col-span-1",
    component: "input",
    type: "password",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",

    className: "col-span-2 lg:col-span-1",
    component: "input",
    type: "password",
  },
  {
    label: "Company",
    className: "col-span-2",
    name: "company",
    component: "input",
    type: "text",
  },
  {
    label: "Phone",
    className: "col-span-2",
    name: "phone",
    component: "input",
    type: "text",
  },
];
