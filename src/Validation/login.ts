import * as Yup from "yup";

export const loginValidation = Yup.object({
  username: Yup.string().required("Voice Number is required"),
  password: Yup.string().required('Password is required'),
});
