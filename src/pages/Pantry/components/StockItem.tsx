import React, { useState, useContext, memo } from "react";
import EditStockItem from "./EditStockItem";
import {
  Checkbox,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import { DispatchContext } from "../../../contexts/StockContext";

interface StockListItem {
  id: string;
  name: string;
  expiryDate: string;
  consumed: boolean;
}

interface Props {
  item: StockListItem;
}

// TO DO HERE
// write a function + delete a btn which deletes all consumed stock items
// have the expired items automatically toggle their status, so you can review before they get deleted

const StockItem: React.FC<Props> = ({ item }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const dispatch = useContext(DispatchContext);

  return (
    <ListItem style={{ height: "64px" }}>
      {isEdit ? (
        <EditStockItem
          id={item.id}
          currVal={item.name}
          handleEdit={handleEdit}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={item.consumed}
            onClick={() => {
              dispatch({ type: "COMPLETE", id: item.id });
              console.log("RERENDER ITEM", item.name);
            }}
          />
          <ListItemText
            style={{ textDecoration: item.consumed ? "line-through" : "none" }}
          >
            {item.name}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="edit" onClick={handleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => dispatch({ type: "DELETE", id: item.id })}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default memo(StockItem);
