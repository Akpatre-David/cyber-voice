import React from "react";
import { useField, FieldHookConfig } from "formik";

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  disabled?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  error?: string;
}

const Select: React.FC<SelectProps & FieldHookConfig<string> & any> = (
  props
) => {
  const {
    label,
    placeholder,
    children,
    onChange,
    disabled,
    isLoading,
    isError,
    error,
    ...rest
  } = props;
  const [field, meta] = useField(rest);

  return (
    <section>
      <label>{label}</label>

      <select {...field} value={field.value} {...rest}>
        <option value="" defaultValue={""}>
          {placeholder}
        </option>
        {children}
      </select>

      {meta.touched && meta.error && <div>{meta.error}</div>}
    </section>
  );
};

export default Select;
