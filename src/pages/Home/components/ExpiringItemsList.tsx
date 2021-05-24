import React, { useState } from "react";
import RecipeSearchDialog from "./RecipeSearchDialog";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Paper from "@material-ui/core/Paper";

const storage = ["sesame", "red lentils", "matcha pulver"];

interface Props {
  open: boolean;
  handleClickOpen: (item: string) => void;
  handleClose: () => void;
  handleSearch: () => void;
  handleAdvancedSearch: (itemList: string[]) => void;
}

const ExpiringItemsList: React.FC<Props> = ({
  open,
  handleClickOpen,
  handleClose,
  handleSearch,
  handleAdvancedSearch,
}) => {
  return (
    <>
      <Paper>
        <List>
          {storage.map((el) => {
            return (
              <ListItem key={el}>
                <ListItemAvatar>
                  <Avatar>
                    <ArrowForwardIosIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={el} secondary="Jan 9, 2014" />
                <Button onClick={() => handleClickOpen(el)}>get recipe</Button>
              </ListItem>
            );
          })}
        </List>
      </Paper>
      <RecipeSearchDialog
        open={open}
        handleClose={handleClose}
        handleSearch={handleSearch}
        handleAdvancedSearch={handleAdvancedSearch}
      />
    </>
  );
};

export default ExpiringItemsList;
