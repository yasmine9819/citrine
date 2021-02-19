import React, { useRef } from "react";
import Header from "../../Features/NavBar/NavBar";
import Footer from "../../Features/Footer";
import Container from "@material-ui/core/Container";
import HeroComponent from "../../Features/HeroComponent";
import CardComponent from "../../Features/Card";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import SyncIcon from "@material-ui/icons/Sync";
import { Typography } from "@material-ui/core";
import Timeline from "../../Features/Timeline";
import MarkunreadIcon from "@material-ui/icons/Markunread";

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
    card: {
      maxWidth: 360,
      [theme.breakpoints.up("lg")]: {
        width: 360,
        height: 320,
      },
      [theme.breakpoints.only("md")]: {
        width: 300,
        height: 320,
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
      maxWidth: 750,
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
    contactSection: {
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginTop: 80,
      },
    },
    contactCard: {
      maxWidth: 900,
      margin: "auto",
      height: 300,
    },
    mainContainer: {
      marginBottom: 100,
    },
  })
);

function HomePage() {
  const classes = useStyles();
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
      <div className={classes.mainContainer}>
        <div className={classes.heroBackground} ref={homeRef}>
          <HeroComponent />
          <Container maxWidth="lg">
            <div className={classes.cardGrid}>
              <CardComponent
                icon={<PersonIcon className={classes.icon} />}
                body={
                  "Aligner le développement produit avec les besoins actuels de vos clients"
                }
                title={"CUSTOMER CENTRIC"}
                localStyle={classes.card}
              />
              <CardComponent
                icon={<SyncIcon className={classes.icon} />}
                title={"DÉVELOPPEMENT ITÉRATIF"}
                body={
                  "Développement en mode agile pour une présence rapide sur le marché"
                }
                localStyle={classes.card}
              />
              <CardComponent
                icon={<SignalCellularAltIcon className={classes.icon} />}
                title={"AMÉLIORATION CONTINUE"}
                body={
                  "Opter pour l’innovation en continue pour garantir la pérennité de votre produit "
                }
                localStyle={classes.card}
              />
            </div>
          </Container>
        </div>
        <Container maxWidth="lg">
          <div className={classes.aboutSection} ref={aboutRef}>
            <Typography variant="h4" className={classes.aboutTitle}>
              {"Réaliser votre projet c’est notre métier !"}
            </Typography>
            <Typography variant="h6" className={classes.aboutBody}>
              {
                "Nous sommes une équipe d’experts en digital passionnée à la recherche de nouveaux  challenges, allié à vos succès on se nourrit des dernières technologies et tendances. Notre expertise technologique et méthodologique vous offre de l’innovation et de la qualité.Nous vous accompagnons dans chaque étape de votre projet, de la réflexion à la mise en  production."
              }
            </Typography>
          </div>
          <div ref={servicesRef}>
            <Timeline />
          </div>
          <div className={classes.contactSection} ref={contactRef}>
            <CardComponent
              title={"POUR PLUS D’INFORMATION CONTACTEZ NOUS SUR"}
              body={"contact@citrine-digital.com"}
              icon={<MarkunreadIcon className={classes.icon} />}
              localStyle={classes.contactCard}
              bodyStyle="h5"
            />
          </div>
        </Container>
      </div>
      <Footer
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
    </>
  );
}

export default HomePage;
