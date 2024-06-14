import { useNavigate } from "react-router-dom";
import Button from "../../customs/button/button";
import Card from "../../customs/card/card";
import styles from "./main.module.css";

const Main = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <h2 className={styles.welcome}>Welcome to our selfcare, Godwin</h2>
      <div className={styles.card}>
        <Card>
          <p className={styles.title}>
            Your <span>Cyb Voice line is currently</span> <span>Active</span>
          </p>
          <div className={styles.numberCard}>
            <p>Godwin - 015150166</p>
            <p>Current Line</p>
          </div>

          <p className={styles.current}>Current Airtime Credit: 2,000</p>
          <Button onClick={() => navigate("/top-up")}>Top up Airtime</Button>
        </Card>
      </div>
    </section>
  );
};

export default Main;
