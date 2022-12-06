import { TextField, Button } from "components";
import { ITextField } from "components/TextField";
import { useFormik, Form, FormikProvider } from "formik";
import { contactYupSchema } from "validations";
import { ContactInput } from "__generated__/generated";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm({
  onSendEmail,
}: {
  onSendEmail: (values: ContactInput) => void;
}) {
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: contactYupSchema,
    onSubmit: (values: ContactInput, { resetForm }) => {
      onSendEmail(values);
      resetForm();
    },
  });

  const { handleSubmit, getFieldProps, errors, touched, isSubmitting } = formik;
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
            <div key={index} className="w-96">
              <TextField
                key={index}
                label={field.label}
                type={field.type}
                name={field.name}
                rows={field.rows}
                component={field.component}
                placeholder={field.placeholder}
                getFieldProps={getFieldProps}
                errors={errors}
                touched={touched}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end w-full">
          <Button
            loading={isSubmitting}
            className="bg-secondary"
            type="submit"
            variant={"contained"}
          >
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
    type: "text",
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
    rows: 5,
  },
];
