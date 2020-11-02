import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const formbody = { email, password };

    try {
      setError(false);
      const response = await fetch("auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formbody),
      });

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
      } else {
        setAuth(false);
        setError(true);
      }
    } catch (err) {
      console.message(err.message);
    }
  };

  return (
    <Fragment>
      <Container maxWidth="sm">
        <Typography variant="h4">Login</Typography>
        {error && (
          <Alert style={{ margin: 8 }} severity="error">
            Invalid Email or Password
          </Alert>
        )}
        <form onSubmit={onSubmitForm}>
          <TextField
            style={{ margin: 8 }}
            fullWidth
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <TextField
            style={{ margin: 8 }}
            fullWidth
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <Button
            style={{ margin: 8 }}
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
          >
            login
          </Button>
        </form>
        <Button
          style={{ margin: 8 }}
          variant="outlined"
          color="primary"
          size="small"
          component={Link}
          to={"/register"}
        >
          Register
        </Button>
      </Container>
    </Fragment>
  );
};

export default Login;
