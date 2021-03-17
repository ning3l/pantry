import React from "react";
import {
  Paper,
  List,
  Divider,
  ListItem,
  ListItemText,
} from "@material-ui/core";

interface StockItem {
  id: number;
  name: string;
  expiryDate: string;
  consumed: boolean;
}

interface Props {
  stock: StockItem[];
}

export const StockList: React.FC<Props> = ({ stock }) => {
  return (
    <Paper>
      <List>
        {stock.map((el) => (
          <>
            <ListItem>
              <ListItemText>{el.name}</ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};
