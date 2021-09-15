import * as yup from "yup";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter the email"),
  password: yup
    .string()
    .trim()
    .min(8, "Password must contain atleast 8 letters")
    .max(12, "Password must not contain more than 12 letters")
    .required("Please enter the password"),
});

export { LoginSchema };
