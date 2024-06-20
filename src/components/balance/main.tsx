import { useNavigate } from "react-router-dom";
import Button from "../../customs/button/button";
import Card from "../../customs/card/card";
import styles from "./main.module.css";
import { useAtom } from "jotai";
import { userBalance, userData } from "../../state";

const Main = () => {
  const navigate = useNavigate();
  const [user] = useAtom(userData);
  const [balance] = useAtom(userBalance);
  return (
    <section className={styles.section}>
      <div>
        <p className={styles.select}>
          <label>Select voice line:</label>
          <select>
            <option>Myself- {user?.login}</option>
          </select>
        </p>
      </div>
      <div className={styles.card}>
        <Card>
          <h1 className={styles.header}>Balance</h1>
          <hr className={styles.space} />
          <div className={styles.flex}>
            <h1 className={styles.header}>{user?.login}</h1>
            <div>
              {/* <p className={styles.para}>Last Recharge : <span>Fri, 14th June 2024</span></p> */}
              <p className={styles.para}>
                Current Airtime Credit :{" "}
                <span>
                  {user?.currencyName}
                  {balance?.creditBalance}
                </span>
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
