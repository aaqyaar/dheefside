import { TextField, Button } from "components";
import { ITextField } from "components/TextField";
import { useFormik, Form, FormikProvider } from "formik";
import { contactYupSchema } from "validations";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: contactYupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { handleSubmit, getFieldProps, errors, touched } = formik;
  return (
    <FormikProvider value={formik}>
      <Form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="flex p-4 flex-col space-y-4"
      >
        <div className="flex flex-col items-start justify-center space-y-2">
          {formFields.map((field, index) => (
            <TextField
              key={index}
              label={field.label}
              type={field.type}
              name={field.name}
              component={field.component}
              placeholder={field.placeholder}
              getFieldProps={getFieldProps}
              errors={errors}
              touched={touched}
            />
          ))}
        </div>
        <div className="flex justify-end w-full">
          <Button type="submit" className="bg-secondary">
            Submit
          </Button>
        </div>
      </Form>
    </FormikProvider>
  );
}

const formFields: ITextField[] = [
  {
    label: "Name",
    type: "text",
    name: "name",
    component: "input",
    placeholder: "example ...(John Doe)",
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    component: "input",
    placeholder: "example ...(info@dheefside.net)",
  },
  {
    label: "Phone",
    type: "number",
    name: "phone",
    component: "input",
    placeholder: "example ...(1234567890)",
  },
  {
    label: "Message",
    placeholder: "example ...(Hello, I want to ask about ...)",
    type: "text",
    name: "message",
    component: "textarea",
    rows: 4,
  },
];
