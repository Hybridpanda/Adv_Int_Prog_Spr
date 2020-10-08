import React, { Fragment, useState } from "react";
import { TextField, Typography, Button } from "@material-ui/core";

const defaultValues = {
  description: "",
  recipient_email: "",
};

const InputFavor = ({ setFavoursChange }) => {
  const [inputs, setInputs] = useState({ defaultValues });

  const { description, recipient_email } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const formbody = { description, recipient_email };

    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      const response = await fetch("http://localhost:5000/profile/favours", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(formbody),
      });

      const parseRes = await response.json();
      //console.log(parseResponse);

      if (parseRes) {
        setFavoursChange(true);
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
          value={description}
          onChange={(e) => onChange(e)}
        />
        <TextField
          style={{ margin: 8 }}
          fullWidth
          type="recpient_email"
          name="recipient_email"
          placeholder="add recipient email"
          required={true}
          value={recipient_email}
          onChange={(e) => onChange(e)}
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
