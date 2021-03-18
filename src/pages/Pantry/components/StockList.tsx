import React from "react";
import StockItem from "./StockItem";
import { Paper, List, Divider } from "@material-ui/core";

interface StockItem {
  id: string;
  name: string;
  expiryDate: string;
  consumed: boolean;
}

interface Props {
  stock: StockItem[];
  deleteStockItem: (id: string) => void;
  completedStockItem: (id: string) => void;
  editStockItem: (id: string, newName: string) => void;
}

export const StockList: React.FC<Props> = ({
  stock,
  deleteStockItem,
  completedStockItem,
  editStockItem,
}) => {
  if (stock.length)
    return (
      <Paper>
        <List>
          {stock.map((item, idx) => (
            <>
              <StockItem
                item={item}
                key={item.id}
                deleteStockItem={deleteStockItem}
                completedStockItem={completedStockItem}
                editStockItem={editStockItem}
              />
              {idx < stock.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
};
