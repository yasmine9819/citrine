import React from "react";
import HeroImage from "../../Resources/background.jpg";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      height: 500,
      width: "100%",
      backgroundImage: ` url(${HeroImage})`,
      background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
      backgroundColor: "#314e58",
      backgroundBlendMode: "overlay",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
    },
    heroText: {
      top: "20%",
      width: "100%",
      textAlign: "center",
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      height: "40%",
    },
    mainColor: {
      color: "white",
    },
    secondaryColor: {
      color: "#DCDCDC",
    },
  })
);

function HeroComponent() {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <div className={classes.heroText}>
        <Typography variant="h2" className={classes.mainColor}>
          {"RÉALISATEUR DE CONCEPTS DIGITAUX "}
        </Typography>
        <Typography variant="h4" className={classes.secondaryColor}>
          {
            "Vous avez un concept digital et innovant ? Vous voulez le concrétiser ?  "
          }
        </Typography>
        <Typography variant="h4" className={classes.secondaryColor}>
          {"Notre équipe est à votre écoute "}
        </Typography>
      </div>
    </div>
  );
}

export default HeroComponent;
