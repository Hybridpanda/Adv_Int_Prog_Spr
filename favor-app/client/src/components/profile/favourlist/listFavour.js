import React, { Fragment, useState, useEffect } from "react";
import EditFavour from "./editFavour";
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

const ListFavours = ({ allFavours, setFavoursChange }) => {
  //console.log(allFavours);
  const [favours, setFavours] = useState([]); //empty array

  //delete favour function

  async function deleteFavour(id) {
    try {
      await fetch(`http://localhost:5000/profile/favours/${id}`, {
        method: "DELETE",
        headers: { token: localStorage.token },
      });

      setFavours(favours.filter((favour) => favour.favour_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    setFavours(allFavours);
  }, [allFavours]);

  //console.log(favours);
  return (
    <Fragment>
      {" "}
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Recipient email</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {favours.length !== 0 &&
              favours[0].favour_id !== null &&
              favours.map((favour) => (
                <TableRow key={favour.favour_id}>
                  <TableCell>{favour.description}</TableCell>
                  <TableCell>{favour.recipient_email}</TableCell>
                  <TableCell>
                    <EditFavour
                      favour={favour}
                      setFavoursChange={setFavoursChange}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => deleteFavour(favour.favour_id)}
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

export default ListFavours;
