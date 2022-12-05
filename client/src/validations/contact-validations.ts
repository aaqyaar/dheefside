import * as Yup from "yup";

export const contactYupSchema = Yup.object().shape({
  name: Yup.string().required("Name field must be filled"),
  email: Yup.string()
    .email("Email must be valid")
    .required("Email field must be filled"),
  phone: Yup.string().required("Phone field must be filled"),
  company: Yup.string().required("Company field must be filled"),
  message: Yup.string().required("Message field must be filled"),
});
