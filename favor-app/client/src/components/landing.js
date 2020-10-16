import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button } from "@material-ui/core";

const landing = () => {
  return (
    <Fragment>
      <Container maxWidth="sm">
        <Typography variant="h4">Welcome</Typography>
        <p>sign in and then you can access favours</p>
        <Button
          style={{ margin: 8 }}
          variant="outlined"
          color="primary"
          size="small"
          component={Link}
          to={"/login"}
        >
          Login
        </Button>
        <Button
          style={{ margin: 8 }}
          variant="outlined"
          color="primary"
          size="small"
          component={Link}
          to={"/register"}
        >
          register
        </Button>
      </Container>
    </Fragment>
  );
};

export default landing;
