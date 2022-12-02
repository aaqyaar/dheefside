import { useState } from "react";
import { FormikProvider, Form, useFormik } from "formik";
import { registerYupSchema } from "validations";

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
          <div className="flex flex-col items-start space-y-4">
            <label htmlFor="name" className="text-gray-400">
              Name
            </label>
            <input
              type="text"
              // name="name"
              id="name"
              className="textfield"
              {...getFieldProps("name")}
            />
            {touched.name && errors.name ? (
              <p className="text-red-500">{errors.name}</p>
            ) : null}
          </div>
        </div>
      </Form>
    </FormikProvider>
  );
}
