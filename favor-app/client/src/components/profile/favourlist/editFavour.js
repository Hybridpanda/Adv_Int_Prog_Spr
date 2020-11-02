import React, { Fragment, useState } from "react";
import {
  withStyles,
  Button,
  TextField,
  Dialog,
  DialogContentText,
  IconButton,
  Typography,
} from "@material-ui/core/";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";

const EditFavour = ({ favour, setFavoursChange }) => {
  //editText function
  const [description, setDescription] = useState("");

  const [open, setOpen] = useState(false);

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((e) => {
    const { children, classes, onClose, ...other } = e;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editText = async (id) => {
    //e.preventDefault();
    try {
      const formbody = { description };

      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      await fetch(`profile/favours/${id}`, {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(formbody),
      });

      setFavoursChange(true);
      handleClose();
      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <Button
        type="button"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Edit
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit favour
        </DialogTitle>

        <DialogContent>
          <DialogContentText> Edit this current favor</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="edit_favour"
            defaultValue=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => editText(favour.favour_id)}>
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default EditFavour;
