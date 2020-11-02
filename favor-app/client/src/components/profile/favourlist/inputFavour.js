import React, { Fragment, useState } from "react";
import { TextField, Typography, Button } from "@material-ui/core";

const InputFavor = ({ setFavoursChange }) => {
  const [description, setDescription] = useState("");
  const [recipient_email, setRecipientEmail] = useState("");
  
  const onSubmitForm = async (e) => {
    e.preventDefault();

    const formbody = { description, recipient_email };

    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      const response = await fetch("profile/favours", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(formbody),
      });

      const parseRes = await response.json();
      //console.log(parseResponse);

      if (parseRes) {
        setFavoursChange(true);
        setDescription("");
        setRecipientEmail("");
      }

      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <Typography varient="h4">Input Favour</Typography>
      <form onSubmit={onSubmitForm}>
        <TextField
          style={{ margin: 8 }}
          fullWidth
          type="description"
          name="description"
          placeholder="description"
          id="textfield1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          style={{ margin: 8 }}
          fullWidth
          type="recpient_email"
          name="recipient_email"
          placeholder="add recipient email"
          id="textfield2"
          required={true}
          value={recipient_email}
          onChange={(e) => setRecipientEmail(e.target.value)}
        />
        <Button
          style={{ margin: 8 }}
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
        >
          Add
        </Button>
      </form>
    </Fragment>
  );
};

export default InputFavor;
