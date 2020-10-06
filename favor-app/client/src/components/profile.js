import React, { Fragment, useState, useEffect } from "react";
import { Container , Typography, Button } from "@material-ui/core";

const Profile = ({ setAuth }) => {
  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/profile", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      setName(parseRes.user_name);
    } catch (err) {
      console.error(err.message);
    }
  }

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <Fragment>
      <Container maxWidth="sm">
        <Typography variant="h4">Profile {name} </Typography>

        <Button variant="contained" onClick={(e) => logout(e)}>
          logout
        </Button>
      </Container>
    </Fragment>
  );
};

export default Profile;
