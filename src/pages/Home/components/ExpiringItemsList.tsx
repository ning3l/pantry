import React from "react";
import RecipeSearchDialog from "./RecipeSearchDialog";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Paper from "@material-ui/core/Paper";

interface Props {
  open: boolean;
  handleClickOpen: () => void;
  handleClose: () => void;
  handleSearch: (itemList: string[]) => void;
}

const ExpiringItemsList: React.FC<Props> = ({
  open,
  handleClickOpen,
  handleClose,
  handleSearch,
}) => {
  return (
    <>
      <Paper>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ArrowForwardIosIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            <Button onClick={handleClickOpen}>get recipe</Button>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ArrowForwardIosIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
            <Button onClick={handleClickOpen}>get recipe</Button>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ArrowForwardIosIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
            <Button onClick={handleClickOpen}>get recipe</Button>
          </ListItem>
        </List>
      </Paper>
      <RecipeSearchDialog
        open={open}
        handleClose={handleClose}
        handleSearch={handleSearch}
      />
    </>
  );
};

export default ExpiringItemsList;
