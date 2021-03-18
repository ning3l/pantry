import React from "react";
import useInput from "../hooks/useInput";
import { Paper, TextField, IconButton } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

interface Props {
  id: string;
  currVal: string;
  editStockItem: (id: string, newName: string) => void;
  handleEdit: () => void;
}

const EditStockItem: React.FC<Props> = ({
  id,
  currVal,
  editStockItem,
  handleEdit,
}) => {
  const [val, handleChange, reset] = useInput(currVal);

  const handleAbort = () => {
    handleEdit();
  };

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        editStockItem(id, val);
        reset();
        handleEdit();
      }}
      style={{
        marginLeft: "1rem",
        width: "100%",
      }}
    >
      <TextField
        margin="normal"
        value={val}
        onChange={handleChange}
        fullWidth
        autoFocus
        InputProps={{
          endAdornment: (
            <IconButton aria-label="abort" onClick={handleAbort}>
              <HighlightOffIcon />
            </IconButton>
          ),
        }}
      />
    </form>
  );
};

export default EditStockItem;
