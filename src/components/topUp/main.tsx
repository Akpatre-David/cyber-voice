import { Form, Formik } from "formik";
import styles from "./main.module.css";
import { number, object } from "yup";
import Button from "../../customs/button/button";
import Input from "../../customs/input/input";
import { ReactComponent as Payment } from "../../svgs/payment.svg";
import { useState } from "react";

const Main = () => {
  const validationSchema = object().shape({
    amount: number().typeError("Amount must be a number").required("Amount is required"),
  });
  return (
    <section className={styles.section}>
      <h1>Top Up</h1>

      <Formik
        initialValues={{
          amount: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          //   loginUserHandler(values);
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
                  <hr className={styles.space} /> <Button>Yes, proceed</Button>
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
