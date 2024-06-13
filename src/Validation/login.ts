import * as Yup from "yup";

export const loginValidation = Yup.object({
  username: Yup.string().required("Voice Number required"),
  password: Yup.string().min(8).required("Password is required"),
});
