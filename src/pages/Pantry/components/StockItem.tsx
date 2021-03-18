import React, { useState } from "react";
import useToggle from "../hooks/toggleState";
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

// TO DO HERE
// write a function + delete all btn which deletes all consumed stock items
// have the expired items automatically toggle their status, so you can review before they get deleted
// fix edit so you can only ever 1 item

interface StockListItem {
  id: string;
  name: string;
  expiryDate: string;
  consumed: boolean;
}

interface Props {
  item: StockListItem;
  deleteStockItem: (id: string) => void;
  completedStockItem: (id: string) => void;
  editStockItem: (id: string, newName: string) => void;
}

const StockItem: React.FC<Props> = ({
  item,
  deleteStockItem,
  completedStockItem,
  editStockItem,
}) => {
  // externalise this logic in custom hook
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = (): void => {
    setIsEdit(!isEdit);
  };

  return (
    <ListItem style={{ height: "64px" }}>
      {isEdit ? (
        <EditStockItem
          id={item.id}
          currVal={item.name}
          editStockItem={editStockItem}
          handleEdit={handleEdit}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={item.consumed}
            onClick={() => completedStockItem(item.id)}
          />
          <ListItemText
            style={{ textDecoration: item.consumed ? "line-through" : "none" }}
          >
            {item.name}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="edit" onClick={() => handleEdit()}>
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => deleteStockItem(item.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default StockItem;
