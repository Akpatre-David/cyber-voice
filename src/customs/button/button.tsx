import React, { FC, PropsWithChildren } from "react";
import styles from "./button.module.css";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.ButtonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
