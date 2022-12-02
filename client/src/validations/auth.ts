import * as Yup from "yup";

export const loginYupSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const registerYupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be valid")
    .required("This field must be filled"),
  name: Yup.string().required("This field must be filled"),
  phone: Yup.string().required("This field must be filled"),
  company: Yup.string().required("This field must be filled"),
  password: Yup.string().required("This field must be filled"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
