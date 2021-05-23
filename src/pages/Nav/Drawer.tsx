import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import KitchenIcon from "@material-ui/icons/Kitchen";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { Switch } from "@material-ui/core";
import { ThemeContext } from "../../contexts/ThemeContext";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

interface Props {
  state: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const Nav: React.FC<Props> = ({ state, toggleDrawer }) => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  const { toggleTheme, isDarkMode } = useContext(ThemeContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked((prev) => !prev);
    toggleTheme();
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key="Home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button key="Pantry">
          <ListItemIcon>
            <KitchenIcon />
          </ListItemIcon>
          <ListItemText primary="Pantry" />
        </ListItem>
        <ListItem button key="Recipes">
          <ListItemIcon>
            <CollectionsBookmarkIcon />
          </ListItemIcon>
          <ListItemText primary="Recipes" />
        </ListItem>
        <ListItem button key="Theme">
          <ListItemIcon>
            {isDarkMode ? <NightsStayIcon /> : <WbSunnyIcon />}
          </ListItemIcon>
          <ListItemText primary="Theme" />
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="Logout">
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default Nav;
