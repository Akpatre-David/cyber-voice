import React, { Children, FC, PropsWithChildren, ReactNode } from "react";
import styles from "./card.module.css";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return <section className={styles.card}>{children}</section>;
};
export default Card;
