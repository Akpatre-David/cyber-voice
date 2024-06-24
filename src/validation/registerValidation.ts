import * as Yup from "yup";

export const registerValidation = Yup.object({
  firstName: Yup.string().required("FirstName is Required"),
  lastName: Yup.string().required("LastName is Required"),
  phoneNumber: Yup.string().required("phoneNumber is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[0-9]/, "Password must contain a number")
    .matches(/[~!@#$%^&*()_+=-]/, "Password must contain a special character"),
  confirmPassword: Yup.string()
    .required(" Password is required")
    .oneOf([Yup.ref("password"), ""], "Passwords must match"),
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter an Email"),
});
