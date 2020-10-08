import React, { Fragment, useState, useEffect } from "react";
import { Container, Typography, Button } from "@material-ui/core";

//components
import InputFavour from "./favourlist/inputFavour";
import ListFavours from "./favourlist/listFavour";

const Profile = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [allFavours, setAllFavours] = useState([]);
  const [favoursChange, setFavoursChange] = useState(false);

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/profile", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();
      setAllFavours(parseRes);
      setName(parseRes[0].user_name);
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
    setFavoursChange(false);
  }, [favoursChange]);

  return (
    <Fragment>
      <Container maxWidth="md">
        <Typography variant="h4">Profile {name} </Typography>
        <Button variant="contained" color="primary" onClick={(e) => logout(e)}>
          logout
        </Button>
        <InputFavour setFavoursChange={setFavoursChange} />
        <ListFavours
          allFavours={allFavours}
          setFavoursChange={setFavoursChange}
        />
      </Container>
    </Fragment>
  );
};

export default Profile;
