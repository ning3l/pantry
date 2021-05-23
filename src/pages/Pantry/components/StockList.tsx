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
  const { stock } = useContext(StockContext);

  if (stock && stock.length)
    return (
      <Paper>
        <List>
          {stock.map((item: StockItem, idx: number) => (
            <>
              <StockItem item={item} key={item.id} />
              {idx < stock.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
};
