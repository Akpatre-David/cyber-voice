import React from "react";
import styles from "./notFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Page Not Found</p>
      <p className={styles.description}>
        Sorry, the page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <a href="/" className={styles.found}>
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
