import React, { FC, InputHTMLAttributes } from "react";
import styles from "./input.module.css";
import { Field, Formik, FieldProps } from "formik";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  label?: string;
  disable?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({
  name,
  placeholder,
  value,
  type,
  label,
  disable,
}) => {
  return (
    <Field name={name}>
      <section></section>
    </Field>
  );
};

export default Input;
