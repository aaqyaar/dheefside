import { Button, Grid } from "components";
import TextField, { ITextField } from "components/TextField";
import { FormikProvider, Form, useFormik } from "formik";
import { bookDemoValidationSchema } from "validations";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  address: "",
};

export default function BookDemoForm() {
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: bookDemoValidationSchema,
    onSubmit: (values) => {
      console.log(values);
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
            <Button type="submit" className="bg-secondary">
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
    name: "phone",
    label: "Phone *",
    type: "text",
    component: "input",
    className: "col-span-2 lg:col-span-1",
    placeholder: "Enter your phone number",
  },
  {
    name: "company",
    label: "Company *",
    type: "text",
    component: "input",
    className: "col-span-2",
    placeholder: "Enter your company name",
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
