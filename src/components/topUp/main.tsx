import { Form, Formik, FormikValues } from "formik";
import styles from "./main.module.css";
import { number, object } from "yup";
import Button from "../../customs/button/button";
import Input from "../../customs/input/input";
import { ReactComponent as Payment } from "../../svgs/payment.svg";
import { useMutation } from "@tanstack/react-query";
import { PaymentDetails, ProcessPaymentCall, ProcessPaymentPayload, baseUrl } from "../../requests";
import { errorMessage } from "../../utils/errorMessage";
import { useSnackbar } from "../../utils/snackBar";
import { useAtom } from "jotai";
import { userData } from "../../state";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const { showSnackbar } = useSnackbar();
  const [user] = useAtom(userData)
  const navigate = useNavigate()
  const validationSchema = object().shape({
    amount: number().typeError("Amount must be a number").required("Amount is required"),
  });

  const topUpMutation = useMutation({
    mutationFn: ProcessPaymentCall,
    mutationKey: ["process-payment"],
  });

  const topUpHandler = async (values: FormikValues) => {
    const payload: ProcessPaymentPayload = {
      money: parseInt(values?.amount),
      returnUrl: `${baseUrl}/dashboard`,
      idClient: user?.idClient,
      clientType: user?.clientType,
      addToInvoice: true,
      description: 'top up'
    };
    try {
      await topUpMutation.mutateAsync(payload, {
        onSuccess: (data) => {
          // console.log(data);
          window.location.replace(data);
          // console.log("navigated");
          
        },
      });
    } catch (error: any) {
      // showSnackbar(errorMessage(error));
    }
  };
  return (
    <section className={styles.section}>
      <h1>Top Up</h1>

      <Formik
        initialValues={{
          amount: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
         topUpHandler(values)
        }}
      >
        {(props) => {
          return (
            <Form>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <Input type="text" label="Amount" placeholder="Enter an amount" name="amount" />
                </div>
                <div className={styles.card}>
                  <p className={styles.confirm}>Confirm Details</p>
                  <p className={styles.amount}>TopUp Amount: N{props.values.amount}</p>
                  <hr className={styles.space} />
                  <p className={styles.confirm}>Payment Method</p>
                  <Payment className={styles.payment} />
                  <hr className={styles.space} /> <Button disabled={topUpMutation?.isPending}>{topUpMutation?.isPending ? 'Loading...': 'Yes, proceed'}</Button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default Main;
