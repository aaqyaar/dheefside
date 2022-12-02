import * as Yup from "yup";

export const loginYupSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const registerSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
