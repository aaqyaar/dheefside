import * as Yup from "yup";

export const loginYupSchema = Yup.object().shape({
  email: Yup.string().email().required("Email field must be filled"),
  password: Yup.string().required("Password field must be filled"),
});

export const registerYupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be valid")
    .required("Email field must be filled"),
  name: Yup.string().required("Name field must be filled"),
  phone: Yup.string().required("Phone field must be filled"),
  company: Yup.string().required("Company field must be filled"),
  password: Yup.string().required("Password field must be filled"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
