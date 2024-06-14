import react from "react";
import styles from "./login.module.css";
import Card from "../../customs/card/card";
import { Form, Formik, FormikValues } from "formik";
import Input from "../../customs/input/input";
import { loginValidation } from "../../validation/login";
import Button from "../../customs/button/button";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { LoginCall, LoginPayload } from "../../requests";


const Login = () => {
  const navigate = useNavigate();
  
  const loginMutation = useMutation({
    mutationFn: LoginCall,
    mutationKey: ['login'],
  })

  const loginHandler = async (values: FormikValues) => {
    const payload: LoginPayload = {
      username: values?.username.trim(),
      password: values?.password.trim(),
    };
    try {
      await loginMutation.mutateAsync(payload, {
        onSuccess: (data) => {
          // setUser(data?.Data);
        },
      });
    } catch (error: any) {
      // notification.error({
      //   message: error?.Message || error?.response?.data?.Message,
      // });
    }
  };

  return (
    <section className={styles.container}>
      <Card>
        <div>
          <p className={styles.sign}>Sign in</p>
        </div>

        <div className={styles.design}>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={loginValidation}
            onSubmit={(values) => {
                loginHandler(values);
            }}>
            {(props) => {
              return (
                <Form>
                  <div className={styles.inputContainer}>
                    <Input
                      type="text"
                      label="Username"
                      placeholder="Voice Number"
                      name="username"
                    />
                    <Input
                      label="Password"
                      placeholder="*******"
                      name="password"
                      type="password"
                    />
                  </div>

                  <div className={styles.buttonStyle}>
                    <Button>Login</Button>
                  </div>

                  <div className={styles.linkContainer}>
                    <span>
                      <Link to="/dashboard" className={styles.links}>
                        Forget your password?
                      </Link>
                    </span>

                    <span>
                      <Link to="/" className={styles.links}>
                        Recover your password
                      </Link>
                    </span>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Card>
    </section>
  );
};

export default Login;
