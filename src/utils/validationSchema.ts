import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().trim().required("Name is required."),
  email: yup
    .string()
    .trim()
    .email("Invalid e-mail address.")
    .required("E-mail is required."),
  subject: yup.string().trim(),
  phone: yup
    .string()
    .trim()
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
      "Invalid phone number."
    ),
  message: yup.string().trim().required("Please leave a message."),
});

export default schema;
