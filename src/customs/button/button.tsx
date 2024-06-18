import React, { FC, PropsWithChildren } from "react";
import styles from "./button.module.css";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, type , disabled}) => {
  return (
    <button className={styles.ButtonStyle} onClick={onClick} type={type} disabled={disabled} >
      {children}
    </button>
  );
};

export default Button;
