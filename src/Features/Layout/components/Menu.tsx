import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Typography } from "@material-ui/core";

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
}

export default function SwipeableTemporaryDrawer({
  toggleDrawer,
  state,
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

        <ListItem button className={classes.link}>
          <ListItemText>
            <Typography> {"Home"}</Typography>
          </ListItemText>
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem button className={classes.link}>
          <ListItemText>
            <Typography>{"About"}</Typography>
          </ListItemText>
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem button className={classes.link}>
          <ListItemText>
            <Typography>{"Services"}</Typography>
          </ListItemText>
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem button className={classes.link}>
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
    >
      {list()}
    </SwipeableDrawer>
  );
}
