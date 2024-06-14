import react from "react";
import styles from "./login.module.css";
import Card from "../../customs/card/card";
import { Form, Formik } from "formik";
import Input from "../../customs/input/input";
import { loginValidation } from "../../Validation/login";
import Button from "../../customs/button/button";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

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
              //   loginUserHandler(values);
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
                      <Link to="/" className={styles.links}>
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
