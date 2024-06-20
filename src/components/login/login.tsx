import { useEffect } from "react";
import styles from "./login.module.css";
import Card from "../../customs/card/card";
import { Form, Formik, FormikValues } from "formik";
import Input from "../../customs/input/input";
import Button from "../../customs/button/button";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { LoginCall, LoginPayload } from "../../requests";
import { useAtom } from "jotai";
import { userData } from "../../state";
import { useSnackbar } from "../../utils/snackBar";
import { loginValidation } from "../../validation/login";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userData);
  const { showSnackbar } = useSnackbar();

  const loginMutation = useMutation({
    mutationFn: LoginCall,
    mutationKey: ["login"],
  });

  const loginHandler = async (values: FormikValues) => {
    const payload: LoginPayload = {
      username: values?.username.trim(),
      password: values?.password.trim(),
    };
    try {
      await loginMutation.mutateAsync(payload, {
        onSuccess: (data) => {
          setUser(data);
          showSnackbar("Successfully logged in", { autoHideDuration: 2500 });
        },
      });
    } catch (error: any) {
      showSnackbar(error?.response?.data?.message || "Error while logging in", {
        autoHideDuration: 2500,
      });
    }
  };

  useEffect(() => {
    if (user?.login && user?.eMail && user?.idClient) {
      navigate("/dashboard");
    }
  }, [user]);

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
                    <Button type="submit" disabled={loginMutation.isPending}>
                      {loginMutation?.isPending ? "Logging in.." : "Login"}
                    </Button>
                  </div>

                  <div className={styles.linkContainer}>
                    <span>
                      <Link to="/" className={styles.linkss}>
                        Forget your password?
                      </Link>
                    </span>

                    <span>
                      <Link to="/" className={styles.links}>
                        Recover your password here...
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
