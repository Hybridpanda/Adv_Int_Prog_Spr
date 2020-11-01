import React, {
  Fragment,
  useState,
  useEffect
} from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from "@material-ui/core";

const Landing = () => {

  const shortid = require('shortid');
  const [boards, setBoard] = useState([]);

  async function getBoard() {
    try {
      const response = await fetch("http://localhost:5000/", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();
      console.log(parseRes);
      setBoard(parseRes);
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getBoard();
  }, []);
  
  return (
    <Fragment>
      <Container maxWidth="sm">
        <Typography variant="h4">Welcome</Typography>
        <p>sign in and then you can access favours</p>
        <TableContainer component={Paper}>
          <Table aria-Label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {boards.length !== 0 && boards.map((board) => (
                <TableRow key={shortid.generate()}>
                    <TableCell>{board.user_name}</TableCell>
                    <TableCell>{board.user_email}</TableCell>
                </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
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

export default Landing;
