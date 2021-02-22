import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Typography } from "@material-ui/core";
import { scrollToRef } from "../../../utils/globalFunctions";

const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundColor: "#46707F",
    height: "100%",
  },
  title: {
    textAlign: "center",
    color: "white",
  },
  link: {
    color: "white",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#FA6900",
    },
  },
  divider: {
    backgroundColor: "#A9A9A9",
  },
});

interface Props {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  state: boolean;
  homeRef: React.RefObject<HTMLDivElement> | null;
  aboutRef: React.RefObject<HTMLDivElement> | null;
  servicesRef: React.RefObject<HTMLDivElement> | null;
  contactRef: React.RefObject<HTMLDivElement> | null;
  className?: string;
}

export default function SwipeableTemporaryDrawer({
  toggleDrawer,
  state,
  homeRef,
  aboutRef,
  servicesRef,
  contactRef,
  className,
}: Props) {
  const classes = useStyles();

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem className={classes.title}>
          <ListItemText>
            <Typography variant="h5">{"Citrine"}</Typography>
          </ListItemText>
        </ListItem>

        <ListItem
          button
          className={classes.link}
          onClick={() => scrollToRef(homeRef)}
          aria-label="Home"
        >
          <ListItemText>
            <Typography> {"Home"}</Typography>
          </ListItemText>
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem
          button
          className={classes.link}
          onClick={() => scrollToRef(aboutRef)}
          aria-label="About"
        >
          <ListItemText>
            <Typography>{"About"}</Typography>
          </ListItemText>
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem
          button
          className={classes.link}
          onClick={() => scrollToRef(servicesRef)}
          aria-label="Services"
        >
          <ListItemText>
            <Typography>{"Services"}</Typography>
          </ListItemText>
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem
          button
          className={classes.link}
          onClick={() => scrollToRef(contactRef)}
          aria-label="Contact"
        >
          <ListItemText>
            <Typography>{"Contact"}</Typography>
          </ListItemText>
        </ListItem>
        <Divider className={classes.divider} />
      </List>
    </div>
  );

  return (
    <SwipeableDrawer
      anchor="right"
      open={state}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      className={className}
      swipeAreaWidth={0}
    >
      {list()}
    </SwipeableDrawer>
  );
}
