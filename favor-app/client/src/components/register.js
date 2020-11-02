import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });
  const { email, password, name } = inputs;
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      setError(false);
      const formBody = { email, password, name };
      const response = await fetch("auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formBody),
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
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <Container maxWidth="sm">
        <Typography variant="h4">Register</Typography>
        {error && (
          <Alert style={{ margin: 8 }} severity="error">
            User already exists
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
          <TextField
            style={{ margin: 8 }}
            fullWidth
            type="name"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
          <Button
            style={{ margin: 8 }}
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
        <Button
          style={{ margin: 8 }}
          variant="outlined"
          color="primary"
          size="small"
          component={Link}
          to={"/login"}
        >
          login
        </Button>
      </Container>
    </Fragment>
  );
};

export default Register;
