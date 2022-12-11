import { useState } from "react";
import { FormikProvider, Form, useFormik } from "formik";
import { registerYupSchema } from "validations";
import { Button, TextField } from "components";
import { ITextField } from "components/TextField";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const initialState = {
  email: "",
  password: "",
  company: "",
  name: "",
  phone: "",
};

export default function RegisterForm({
  onRegister,
  loading,
}: {
  onRegister: (values: any) => void;
  loading: boolean;
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
        {formFields.map((field: ITextField, i) => (
          <div className={`${field.className} relative `} key={i}>
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
            loading={loading}
            disabled={loading}
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
