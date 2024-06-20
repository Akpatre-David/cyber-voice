import CircularProgress from "@mui/material/CircularProgress";
import styles from "./spinner.module.css";

const spinner: React.FC = () => {
  return (
    <section className={styles.spinnerContainer}>
      <CircularProgress color="primary" />
    </section>
  );
};

export default spinner;
