import React, { useContext } from "react";
import StockItem from "./StockItem";
import { Paper, List, Divider } from "@material-ui/core";
import { PantryContext } from "../../../contexts/PantryContext";

interface StockItem {
  id: string;
  name: string;
  expiryDate: string;
  consumed: boolean;
}

// interface Props {
//   stock: StockItem[];
//   deleteStockItem: (id: string) => void;
//   completedStockItem: (id: string) => void;
//   editStockItem: (id: string, newName: string) => void;
// }

export const StockList: React.FC = () => {
  // const {
  //   stock,
  //   deleteStockItem,
  //   completedStockItem,
  //   editStockItem,
  // } = useContext(PantryContext);

  // CHANGE THIS !
  // const stock = useContext(PantryContext)
  const stock: StockItem[] = [
    { id: "123", name: "test", expiryDate: "testDate", consumed: false },
  ];

  if (stock.length)
    return (
      <Paper>
        <List>
          {stock.map((item: StockItem, idx: number) => (
            <>
              <StockItem
                item={item}
                key={item.id}
                // deleteStockItem={deleteStockItem}
                // completedStockItem={completedStockItem}
                // editStockItem={editStockItem}
              />
              {idx < stock.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
};
