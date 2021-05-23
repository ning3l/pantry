import React, { useContext } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { ThemeContext } from "../../contexts/ThemeContext";

interface Props {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const NavBar: React.FC<Props> = ({ toggleDrawer }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <AppBar
      color={isDarkMode ? "transparent" : "primary"}
      position="static"
      style={{ height: "64px" }}
    >
      <Toolbar>
        <Typography color="inherit" onClick={toggleDrawer(true)}>
          PANTRY
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
