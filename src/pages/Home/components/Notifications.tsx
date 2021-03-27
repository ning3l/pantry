import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const Notifcations: React.FC<Props> = ({ open, handleClose }) => {
  // HANDLE RECIPE SEARCH MODAL

  return (
    <div>
      Upcoming expiry dates
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"How do you want to look for recipes"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Just fetch me data for that single item please!
            <Button>get recipes</Button>
          </DialogContentText>
          <DialogContentText>
            I'd like to add additional items
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <Button>get recipes</Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Notifcations;
