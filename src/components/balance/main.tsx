import { useNavigate } from "react-router-dom";
import Button from "../../customs/button/button";
import Card from "../../customs/card/card";
import styles from "./main.module.css";

const Main = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <div>
        <p className={styles.select}>
          <label>Select voice line:</label>
          <select>
            <option>Myself- 02012435667</option>
          </select>
        </p>
      </div>
      <div className={styles.card}>
        <Card>
          <h1 className={styles.header}>Balance</h1>
          <hr className={styles.space} />
          <div className={styles.flex}>
            <h1 className={styles.header}>015150099876</h1>
            <div>
              <p className={styles.para}>
                Last Recharge : <span>Fri, 14th June 2024</span>
              </p>
              <p className={styles.para}>
                Current Airtime Credit : <span>2000</span>
              </p>
            </div>
          </div>
          <Button onClick={() => navigate("/top-up")}>Top up Airtime</Button>
        </Card>
      </div>
    </section>
  );
};

export default Main;
