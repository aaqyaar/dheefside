import React from "react";

import { FormikProvider, useFormik, Form } from "formik";
import { Button, TextField } from "components";
import { verifyCodeValidationSchema } from "validations/auth";

export default function Code() {
  const formik = useFormik({
    initialValues: {
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      code5: "",
      code6: "",
    },
    validationSchema: verifyCodeValidationSchema,
    onSubmit: (values) => {
      const code = Object.values(values).join("");
      console.log(code);
    },
  });
  const { handleSubmit, errors, touched } = formik;

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div
          id="otp"
          className="flex flex-row justify-center text-center px-2 my-3"
        >
          {[...Array(6)].map((_, i) => (
            <TextField
              className="m-2 border h-10 w-12 text-center form-control rounded"
              label={""}
              name={`code${i + 1}`}
              component={"input"}
              type={"text"}
              maxLength={1}
              key={i}
              getFieldProps={formik.getFieldProps}
              errors={errors}
              touched={touched}
              showError={false}
            />
          ))}
        </div>
        <div className="flex justify-center text-center my-5">
          <Button type="submit" className="bg-secondary">
            Verify
          </Button>
        </div>
      </Form>
    </FormikProvider>
  );
}
