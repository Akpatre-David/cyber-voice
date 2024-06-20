import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../customs/button/button";
import Card from "../../customs/card/card";
import styles from "./main.module.css";
import { useAtom } from "jotai";
import { userBalance, userData } from "../../state";
import { QueryPaymentCall } from "../../requests";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSnackbar } from "../../utils/snackBar";

const Main = () => {
  const navigate = useNavigate();
  const [user] = useAtom(userData)
  const [balance] = useAtom(userBalance)
  const [params] = useSearchParams();
  const ref = params.get("ref");
  const {showSnackbar} = useSnackbar()
  const queryClient = useQueryClient()

  const queryTransactionQuery = useQuery({
    queryKey: ["query-payment"],
    queryFn: () => QueryPaymentCall(ref!),
    enabled: !!ref,
  });


  useEffect(() => {
    if (!!ref && queryTransactionQuery?.isSuccess)
      showSnackbar('Top Up Successful!!')
    queryClient.refetchQueries({ queryKey: ["get-balance"]});
  }, [ref, queryTransactionQuery.isSuccess]);

  useEffect(() => {
    queryClient.refetchQueries({ queryKey: ['get-balance'] });
  }, [queryClient]);
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

          <p className={styles.current}>Current Airtime Credit: {user?.currencyName}{balance?.creditBalance}</p>
          <Button onClick={() => navigate("/top-up")}>Top up Airtime</Button>
        </Card>
      </div>
    </section>
  );
};

export default Main;
