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
      {({ field, meta }: FieldProps) => (
        <section className={styles.container}>
          <label>{label}</label>

          <div className={styles.InputContainer}>
            <input
              {...field}
              placeholder={placeholder}
              disabled={disable}></input>
          </div>

          {meta.touched && meta.error && (
            <div className={styles.error}>{meta.error}</div>
          )}
        </section>
      )}
    </Field>
  );
};

export default Input;
