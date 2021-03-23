import React, { useState, useContext } from "react";
import EditStockItem from "./EditStockItem";
import { DispatchContext } from "../../../contexts/PantryContext";
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
// write a function + delete a btn which deletes all consumed stock items
// have the expired items automatically toggle their status, so you can review before they get deleted

interface StockListItem {
  id: string;
  name: string;
  expiryDate: string;
  consumed: boolean;
}

interface Props {
  item: StockListItem;
  // deleteStockItem: (id: string) => void;
  // completedStockItem: (id: string) => void;
  // editStockItem: (id: string, newName: string) => void;
}

const StockItem: React.FC<Props> = ({
  item,
  // deleteStockItem,
  // completedStockItem,
  // editStockItem,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = (): void => {
    setIsEdit(!isEdit);
  };

  // GET STATE FROM CONTEXT
  const dispatch = useContext(DispatchContext);

  return (
    <ListItem style={{ height: "64px" }}>
      {isEdit ? (
        <EditStockItem
          id={item.id}
          currVal={item.name}
          // editStockItem={editStockItem}
          handleEdit={handleEdit}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={item.consumed}
            onClick={() => dispatch({ type: "COMPLETE", id: item.id })}
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

export default StockItem;
