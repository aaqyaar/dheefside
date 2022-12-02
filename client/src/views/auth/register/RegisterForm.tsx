import { useState } from "react";
import { FormikProvider, Form, useFormik } from "formik";
import { registerYupSchema } from "validations";
import { Button, TextField } from "components";
import { InputType, ITextField } from "components/TextField";
import styles from "styles/style";

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

  const { values, handleSubmit, touched, errors, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form onSubmit={handleSubmit} noValidate autoComplete="off">
        <div className="flex flex-col items-center space-y-4">
          <div className="mt-4">
            {formFields.map((field: ITextField) => (
              <TextField
                key={field.name}
                label={field.label}
                name={field.name}
                component={field.component}
                className={field.className}
                type={field.type}
                placeholder={field.placeholder}
                onChange={field.onChange}
                errors={errors}
                touched={touched}
                getFieldProps={getFieldProps}
                endIcon={field.endIcon}
                startIcon={field.startIcon}
                options={field.options}
              />
            ))}

            <div
              className={`${styles.flexCol} items-center justify-center space-y-4`}
            >
              <Button
                className="w-96 h-12 text-black"
                variant={"contained"}
                type="submit"
              >
                Register
              </Button>
            </div>
          </div>
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
    type: InputType.text,
  },
  {
    label: "Email",
    name: "email",
    component: "input",
    type: InputType.email,
  },
  {
    label: "Password",
    name: "password",
    component: "input",
    type: InputType.password,
  },
  {
    label: "Company",
    name: "company",
    component: "input",
    type: InputType.text,
  },
  {
    label: "Phone",
    name: "phone",
    component: "input",
    type: InputType.text,
  },
];
