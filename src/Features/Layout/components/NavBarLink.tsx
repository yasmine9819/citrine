import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

type Type = "header" | "footer";

interface Props {
  name: string;
  type: Type;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkHeader: {
      display: "inline",
      position: "relative",
      color: "#46707F",
      overflow: "hidden",
      transitionProperty: "color",
      transitionDuration: " 0.4s ",
      transitionTimingFunction: "ease-out",
      "&:hover": {
        color: "#FA6900",
      },
      "&::after": {
        content: "close-quote",
        position: "absolute",
        right: 0,
        width: 0,
        bottom: "-1px",
        backgroundColor: " #FA6900",
        height: 4,
        transitionProperty: "width",
        transitionDuration: " 0.4s ",
        transitionTimingFunction: "ease-out",
      },
      "&:hover::after": {
        left: 0,
        right: "auto",
        width: "100%",
        backgroundColor: " #FA6900",
      },
    },
    linkFooter: {
      color: "#D3D3D3",
      transitionProperty: "color",
      transitionDuration: " 0.4s ",
      transitionTimingFunction: "ease-out",
      fontSize: "12px",
      fontWeight: 200,
      "&:hover": {
        color: "#FA6900",
      },
    },
  })
);

export default function NavBarLink({ name, type, ...props }: Props) {
  const classes = useStyles();

  return (
    <Link
      color="textPrimary"
      component="button"
      className={type === "header" ? classes.linkHeader : classes.linkFooter}
      underline="none"
    >
      <Typography variant="button">{name}</Typography>
    </Link>
  );
}
