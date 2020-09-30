import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ setAuth }) => {

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const {email, password} = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const formbody = {email, password}

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formbody),
      });

      const parseRes = await response.json();

      localStorage.setItem("token", parseRes.token);
      setAuth(true);
    } catch (err) {
      console.message(err.message);
    }
  }

  return (
    <Fragment>
      <h1 className="text-center my-5">Login</h1>
      <form onSubmit={onSubmitForm}>
        <input type="email" name="email" placeholder="email" className="form-control my-3" value={email}
          onChange={(e) => onChange(e)} />
        <input type="password" name="password" placeholder="password" className="form-control my-3" value={password}
          onChange={(e) => onChange(e)} />
        <button className="btn btn-success btn-block">login</button>
      </form>
      <Link to="/register">Register</Link>
    </Fragment>
  );
};

export default Login;
