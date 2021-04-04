import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Paper, List, Divider } from "@material-ui/core";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

interface Props {
  open: boolean;
  handleClose: () => void;
  handleSearch: (itemList: string[]) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "100%",
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120,
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
  })
);

const RecipeSearchDialog: React.FC<Props> = ({
  open,
  handleClose,
  handleSearch,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Recipe Search"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText align="center">
            You can just fetch matching recipes for the item that is about to
            expire with our simple search:
          </DialogContentText>
          <Button style={{ width: "100%" }} onSubmit={() => handleSearch(val)}>
            simple search
          </Button>
        </DialogContent>
        <DialogContent>
          <DialogContentText align="center">
            Or add additional ingredients in a comma-separated list:
          </DialogContentText>
          <form className={classes.form}>
            <TextField
              // value={val}
              // onChange={handleChange}
              margin="normal"
              label="rice, cheddar, mayonnaise"
              fullWidth
            />
            <Button>advanced search</Button>
          </form>
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

export default RecipeSearchDialog;
