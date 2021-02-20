import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NavBarLink from "../../Components/NavBarLink";
import logo from "../../Resources/logo.png";
import Menu from "./components/Menu";
import { Container } from "@material-ui/core";
import { scrollToRef } from "../../utils/globalFunctions";

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

interface Props {
  homeRef: React.RefObject<HTMLDivElement> | null;
  aboutRef: React.RefObject<HTMLDivElement> | null;
  servicesRef: React.RefObject<HTMLDivElement> | null;
  contactRef: React.RefObject<HTMLDivElement> | null;
}
export default function PrimarySearchAppBar({
  homeRef,
  aboutRef,
  servicesRef,
  contactRef,
  ...props
}: Props) {
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
            <img src={logo} className={classes.logo} alt="logo" />
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <NavBarLink
                name="home"
                type="header"
                handleScroll={() => scrollToRef(homeRef)}
                aria-label="Home"
              />
              <NavBarLink
                name="about "
                type="header"
                handleScroll={() => scrollToRef(aboutRef)}
                aria-label="About"
              />
              <NavBarLink
                name="services "
                type="header"
                handleScroll={() => scrollToRef(servicesRef)}
                aria-label="Services"
              />
              <NavBarLink
                name="contact "
                type="header"
                handleScroll={() => scrollToRef(contactRef)}
                aria-label="Contact"
              />
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                className={classes.menuButton}
                aria-label="open drawer"
                size="medium"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Menu
        state={state}
        toggleDrawer={toggleDrawer}
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
    </div>
  );
}
