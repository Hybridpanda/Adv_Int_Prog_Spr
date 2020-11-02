import React, { Fragment, useState, useEffect } from "react";
import {
  AppBar,
  Container,
  Typography,
  Tab,
  Button,
} from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";

//components
import InputFavour from "./favourlist/inputFavour";
import ListFavours from "./favourlist/listFavour";
import ListFavoursOwing from "./favourlist/listOwingFavours";

const Profile = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [allFavours, setAllFavours] = useState([]);
  const [favoursChange, setFavoursChange] = useState(false);
  const [value, setValue] = React.useState("1");

  async function getName() {
    try {
      const response = await fetch("profile", {
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        <TabContext value={value}>
          <AppBar position="static">
            <TabList
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Favours Owed" value="1" />
              <Tab label="Favours Owing" value="2" />
            </TabList>
          </AppBar>
          <TabPanel value="1">
            <InputFavour setFavoursChange={setFavoursChange} />
            <ListFavours
              allFavours={allFavours}
              setFavoursChange={setFavoursChange}
            />
          </TabPanel>
          <TabPanel value="2">
            <ListFavoursOwing />
          </TabPanel>
        </TabContext>
      </Container>
    </Fragment>
  );
};

export default Profile;
