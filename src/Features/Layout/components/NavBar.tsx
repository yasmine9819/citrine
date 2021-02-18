import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NavBarLink from "./NavBarLink";
import logo from "../../../Resources/logo.png";
import Menu from "./Menu";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: "#46707F",
    },

    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        justifyContent: "space-between",
        maxWidth: 350,
        width: "-webkit-fill-available",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    logo: {
      maxWidth: 100,
    },
  })
);

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar>
            <img src={logo} className={classes.logo} />
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <NavBarLink name="home" type="header" />
              <NavBarLink name="about " type="header" />
              <NavBarLink name="services " type="header" />
              <NavBarLink name="contact " type="header" />
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                aria-label="open drawer"
                size="medium"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Menu state={state} toggleDrawer={toggleDrawer} />
    </div>
  );
}
