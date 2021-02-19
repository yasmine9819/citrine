import React, { ReactElement } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { CardMedia, SvgIconTypeMap } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 360,
      borderRadius: 9,
      marginBottom: 20,
      [theme.breakpoints.up("lg")]: {
        width: 360,
        height: 320,
      },
      [theme.breakpoints.only("md")]: {
        width: 300,
        height: 320,
      },
    },
    content: {
      textAlign: "center",
    },
    title: {
      color: "#af4900",
      marginBottom: 15,
      marginTop: 10,
    },
    body: {
      color: "#5a7179",
    },
    icon: {
      height: 50,
      width: 50,
      fill: "white",
      margin: "auto",
      position: "relative",
      top: "25%",
    },
    iconBackground: {
      marginTop: 30,
      backgroundColor: "#FA6900",
      borderRadius: "50%",
      height: 100,
      width: 100,
      margin: "auto",
    },
  })
);

interface Props {
  icon: any;
  title: string;
  body: string;
}

export default function CardComponent({ icon, title, body }: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised>
      <CardMedia className={classes.content}>
        <div className={classes.iconBackground}>{icon}</div>
      </CardMedia>
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>

        <Typography
          variant="body1"
          color="textSecondary"
          component="p"
          className={classes.body}
        >
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}
