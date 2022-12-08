import * as Yup from "yup";

export const bookDemoValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Email is not valid").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  company: Yup.string().required("Company is required"),
  address: Yup.string().required("Address is required"),
  software: Yup.string().required("Software is required"),
});
