import React, { Fragment, useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const ListFavoursOwing = () => {
  const [recipients, setRecipient] = useState("");

  async function getOwing() {
    try {
      const response = await fetch("http://localhost:5000/profile/recipient", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();

    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getOwing();
  }, [recipients]);

  return (
    <Fragment>
      {" "}
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">User id</TableCell>
              <TableCell align="center">desription</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recipients.length !== 0 &&
              recipients[0].user_id !== null &&
              recipients.map((recipient) => (
                <TableRow key={recipient.user_id}>
                  <TableCell align="center">{recipient.user_id}</TableCell>
                  <TableCell align="center">{recipient.description}</TableCell>
                  <TableCell align="center">
                    <button
                      variant="contained"
                      color="primary"
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};
export default ListFavoursOwing;
