import { Button, Grid } from "components";
import TextField, { ITextField } from "components/TextField";
import { useAuth } from "contexts/AuthContext";
import { FormikProvider, Form, useFormik } from "formik";
import toast from "react-hot-toast";
import { bookDemoValidationSchema } from "validations";
import { BookingInput } from "__generated__/generated";

interface BookDemoFormProps {
  onBookDemo: (values: BookingInput) => void;
  isLoading: boolean;
  isSuccess: boolean;
}

export default function BookDemoForm({
  onBookDemo,
  isLoading,
  isSuccess,
}: BookDemoFormProps) {
  const { auth } = useAuth();
  const formik = useFormik({
    initialValues: {
      firstName: auth?.user?.name || "",
      lastName: auth?.user?.name || "",
      email: auth?.user?.email || "",
      phone: "",
      company: "",
      address: "",
      software: "",
    },
    validationSchema: bookDemoValidationSchema,
    onSubmit: (values, { resetForm }) => {
      try {
        onBookDemo(values);
        if (isSuccess) {
          resetForm();
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    },
  });

  const { handleSubmit, touched, errors, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form
        onSubmit={handleSubmit}
        className="font-secondary shadow-2xl shadow-gray-300 rounded-lg h-fit p-5"
      >
        <h1 className="my-2">
          <span className="text-primary">Book</span> a Demo
          <span className="pl-2">
            - Fill out the form below and we will get back to you as soon as we
            can to schedule a demo. We look forward to speaking with you!
          </span>
        </h1>
        <hr className="my-2" />
        <Grid container xs={1} sm={1} md={2} lg={2} spacing={4}>
          {formFields.map((field: ITextField, i: number) => (
            <div className={field.className} key={i}>
              <TextField
                key={field.name}
                name={field.name}
                label={field.label}
                type={field.type}
                component={field.component}
                getFieldProps={getFieldProps}
                errors={errors}
                touched={touched}
              />
            </div>
          ))}
          <div className="mt-2 col-span-2 flex justify-end">
            <Button
              type="submit"
              className={`bg-secondary ${isLoading && "disabled"}`}
              loading={isLoading}
            >
              Book Demo
            </Button>
          </div>
        </Grid>
      </Form>
    </FormikProvider>
  );
}

const formFields: ITextField[] = [
  {
    name: "firstName",
    label: "First Name *",
    type: "text",
    component: "input",
    className: "col-span-2 lg:col-span-1",
    placeholder: "Enter your first name",
  },
  {
    name: "lastName",
    label: "Last Name *",
    type: "text",
    component: "input",
    className: "col-span-2 lg:col-span-1",
    placeholder: "Enter your last name",
  },
  {
    name: "email",
    label: "Email *",
    type: "email",
    component: "input",
    className: "col-span-2 lg:col-span-1",
    placeholder: "Enter your email",
  },

  {
    name: "company",
    label: "Company *",
    type: "text",
    component: "input",
    className: "col-span-2 lg:col-span-1",
    placeholder: "Enter your company name",
  },

  {
    name: "software",
    label: "Software *",
    type: "text",
    component: "input",
    className: "col-span-2",
    placeholder: "Enter software",
  },

  {
    name: "phone",
    label: "Phone *",
    type: "text",
    component: "input",
    className: "col-span-2",
    placeholder: "Enter your phone number",
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    component: "input",
    className: "col-span-2",
    placeholder: "Enter your address",
  },
];
