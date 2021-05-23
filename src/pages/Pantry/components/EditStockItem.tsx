import React, { useContext } from "react";
import useInput from "../../../hooks/useInput";
import { TextField, IconButton } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import { StockContext } from "../../../contexts/StockContext";

interface Props {
  id: string;
  currVal: string;
  // editStockItem: (id: string, newName: string) => void;
  handleEdit: () => void;
}

const EditStockItem: React.FC<Props> = ({ id, currVal, handleEdit }) => {
  // initialize editing
  const [val, handleChange, reset] = useInput(currVal);

  const handleAbort = () => {
    handleEdit();
  };

  const { dispatch } = useContext(StockContext);

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newName: val });
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
