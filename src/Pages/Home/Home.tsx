import React from "react";
import Container from "@material-ui/core/Container";
import HeroComponent from "../../Features/HeroComponent";
import CardComponent from "../../Features/Card";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import SyncIcon from "@material-ui/icons/Sync";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heroBackground: {
      backgroundColor: "#d7dfe2",
      width: "100%",
      maxHeight: 1450,
      [theme.breakpoints.up("md")]: {
        height: 800,
      },
    },
    cardGrid: {
      display: "flex",
      justifyContent: "space-between",
      position: "relative",
      top: "-75px",
      flexDirection: "column",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
      },
    },
    icon: {
      height: 50,
      width: 50,
      fill: "white",
      margin: "auto",
      position: "relative",
      top: "25%",
    },
    aboutSection: {
      maxWidth: 650,
      textAlign: "center",
      marginTop: 50,
      margin: "auto",
      marginBottom: 50,
    },
    aboutTitle: {
      color: "#fb8733",
      marginBottom: 20,
    },
    aboutBody: {
      color: "#5a7179",
    },
  })
);

function HomePage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroBackground}>
        <HeroComponent />
        <Container maxWidth="lg">
          <div className={classes.cardGrid}>
            <CardComponent
              icon={<PersonIcon className={classes.icon} />}
              body={
                "Aligner le développement produit avec les besoins actuels de vos clients"
              }
              title={"CUSTOMER CENTRIC"}
            />
            <CardComponent
              icon={<SyncIcon className={classes.icon} />}
              title={"DÉVELOPPEMENT ITÉRATIF"}
              body={
                "Développement en mode agile pour une présence rapide sur le marché"
              }
            />
            <CardComponent
              icon={<SignalCellularAltIcon className={classes.icon} />}
              title={"AMÉLIORATION CONTINUE"}
              body={
                "Opter pour l’innovation en continue pour garantir la pérennité de votre produit "
              }
            />
          </div>
        </Container>
      </div>
      <Container maxWidth="lg">
        <div className={classes.aboutSection}>
          <Typography variant="h4" className={classes.aboutTitle}>
            {"Réaliser votre projet c’est notre métier !"}
          </Typography>
          <Typography variant="body1" className={classes.aboutBody}>
            {
              "Nous sommes une équipe d’experts en digital passionnée à la recherche de nouveaux  challenges, allié à vos succès on se nourrit des dernières technologies et tendances. Notre expertise technologique et méthodologique vous ore de l’innovation et de la qualité.Nous vous accompagnons dans chaque étape de votre projet, de la réexion à la mise en  production."
            }
          </Typography>
        </div>
      </Container>
      <div style={{ height: 100 }}></div>
    </>
  );
}

export default HomePage;
