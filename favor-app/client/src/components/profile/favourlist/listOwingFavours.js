import React, { Fragment, useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";

const ListFavoursOwing = () => {
  const [recipients, setRecipient] = useState([]);
  const [favoursChange, setFavoursChange] = useState(false);

  async function getOwing() {
    try {
      const response = await fetch("http://localhost:5000/profile/recipient", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      //console.log(parseRes);
      setRecipient(parseRes);
    } catch (err) {
      console.error(err.message);
    }
  }

  async function deleteOwingFavor(id) {
    try {
      await fetch(`http://localhost:5000/profile/recipient/remove/${id}`, {
        method: "DELETE",
        headers: { token: localStorage.token },
      });

      setRecipient(
        recipients.filter((recipient) => recipient.favour_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getOwing();
  }, []);
  
  useEffect(() => {
    setFavoursChange(false);
  }, [favoursChange]);

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
                <TableRow key={recipient.favour_id}>
                  <TableCell align="center">{recipient.user_id}</TableCell>
                  <TableCell align="center">{recipient.description}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        deleteOwingFavor(recipient.favour_id)
                      }
                    >
                      Delete
                    </Button>
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
