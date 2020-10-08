import React from "react";
import { Link } from "react-router-dom";

const landing = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>sign in and then you can access favours</p>
      <Link to="/login">Login</Link>
      <Link to="/register">register</Link>
    </div>
  );
};

export default landing;
