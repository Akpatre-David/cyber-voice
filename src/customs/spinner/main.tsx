import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./main.module.css";

const Main: React.FC = () => {
  return (
    <section className={styles.spinnerContainer}>
      <CircularProgress color="inherit" size="sm" thickness={1} />
    </section>
  );
};

export default Main;
