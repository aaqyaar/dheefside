import { useState } from "react";
import { FormikProvider, Form, useFormik } from "formik";
import { registerYupSchema } from "validations";
import { Button, TextField } from "components";
import { ITextField } from "components/TextField";
import styles from "styles/style";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const initialState = {
  email: "",
  password: "",
  company: "",
  name: "",
  phone: "",
};

export default function RegisterForm() {
  const [showPasword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPasword);
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: registerYupSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      // resetForm()
    },
  });

  const { handleSubmit, touched, errors, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        className="mt-6 grid gap-4 grid-cols-1"
      >
        {formFields.map((field: ITextField) => (
          <div className={`col-span-2 lg:col-span-1`}>
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

        <div className="col-span-2">
          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700"
          >
            Register
          </Button>
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
  },
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
  {
    label: "Confirm Password",
    name: "confirmPassword",
    component: "input",
    type: "password",
  },
  {
    label: "Company",
    colSpan: 2,
    name: "company",
    component: "input",
    type: "text",
  },
  {
    label: "Phone",
    colSpan: 12,
    name: "phone",
    component: "input",
    type: "text",
  },
];
