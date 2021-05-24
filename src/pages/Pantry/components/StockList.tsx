import React, { useContext } from "react";
import StockItem from "./StockItem";
import { Paper, List, Divider } from "@material-ui/core";

import { StockContext } from "../../../contexts/StockContext";

interface StockItem {
  id: string;
  name: string;
  expiryDate: string;
  consumed: boolean;
}

export const StockList: React.FC = () => {
  const stock = useContext(StockContext);
  console.log("RERENDER FROM STOCK LIST");

  if (stock && stock.length)
    return (
      <Paper>
        <List>
          {stock.map((item: StockItem, idx: number) => (
            <div key={item.id}>
              <StockItem item={item} />
              {idx < stock.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    );
  return null;
};
