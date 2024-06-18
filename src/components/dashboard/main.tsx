import { useNavigate } from "react-router-dom";
import Button from "../../customs/button/button";
import Card from "../../customs/card/card";
import styles from "./main.module.css";
import { useAtom } from "jotai";
import { userData } from "../../state";

const Main = () => {
  const navigate = useNavigate();
  const [user] = useAtom(userData)
  return (
    <section className={styles.section}>
      <h2 className={styles.welcome}>Welcome to our selfcare, {user?.lastName}</h2>
      <div className={styles.card}>
        <Card>
          <p className={styles.title}>
            Your <span>Cyb Voice line is currently</span> <span>Active</span>
          </p>
          <div className={styles.numberCard}>
            <p>{user?.lastName} - {user?.login}</p>
            <p>Current Line</p>
          </div>

          <p className={styles.current}>Current Airtime Credit: {user?.currencyName}{user?.creditBalance}</p>
          <Button onClick={() => navigate("/top-up")}>Top up Airtime</Button>
        </Card>
      </div>
    </section>
  );
};

export default Main;
