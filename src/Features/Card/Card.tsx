import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import conceptionCard from "../../Resources/conceptionCard.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 9,
      marginBottom: 20,
    },
    content: {
      textAlign: "center",
    },
    title: {
      color: "#af4900",
      marginBottom: 15,
      marginTop: 10,
      // color: "white",
      // top: "45%",
      // position: "relative",
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
    media: {
      height: 200,
      backgroundImage: `  url(${conceptionCard})`,
      // backgroundColor: "#984321",
      backgroundColor: "#314e58",
      backgroundBlendMode: "overlay",
    },
  })
);

type Variant =
  | "inherit"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "button"
  | "overline"
  | "srOnly"
  | undefined;

interface Props {
  icon?: any;
  title: string;
  body: string;
  localStyle?: string;
  bodyStyle?: Variant;
}

export default function CardComponent({
  icon,
  title,
  body,
  localStyle,
  bodyStyle,
}: Props) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, localStyle)} raised>
      {icon ? (
        <CardMedia className={clsx(classes.content)}>
          {/* <CardMedia className={clsx(classes.content, classes.media)}> */}
          {/* {icon} */}
          <div className={classes.iconBackground}>{icon}</div>
          {/* <img src={conceptionCard} style={{}} /> */}
          {/* <CardMedia
            className={classes.media}
            image={conceptionCard}
            title="Contemplative Reptile"
          /> */}
          {/* <Typography variant="h4" component="h3" className={classes.title}>
            {title}
          </Typography> */}
        </CardMedia>
      ) : (
        <></>
      )}

      <CardContent className={classes.content}>
        <Typography variant="h5" component="h3" className={classes.title}>
          {title}
        </Typography>

        <Typography
          variant={bodyStyle ? bodyStyle : "body1"}
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
