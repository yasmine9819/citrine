import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import NavBarLink from "../../Components/NavBarLink";
import { Container, Grid, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { scrollToRef } from "../../utils/globalFunctions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linksContainer: {
      display: "flex",
      flexDirection: "column",
      maxWidth: 350,
      margin: 5,

      [theme.breakpoints.up("md")]: {
        flexDirection: "row",

        justifyContent: "space-between",
        width: "100%",
      },
    },
    socialMediaIcon: {
      fill: "white",
    },
    toolBar: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginTop: 80,
      marginBottom: 80,
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",

        width: "auto",
      },
    },
    title: {
      textAlign: "center",
      marginBottom: 10,
    },
    iconsContainer: {
      margin: 5,
    },
    contactIcons: {
      fontSize: 16,
    },
  })
);

interface Props {
  homeRef: React.RefObject<HTMLDivElement> | null;
  aboutRef: React.RefObject<HTMLDivElement> | null;
  servicesRef: React.RefObject<HTMLDivElement> | null;
  contactRef: React.RefObject<HTMLDivElement> | null;
}

export default function Footer({
  homeRef,
  aboutRef,
  servicesRef,
  contactRef,
  ...props
}: Props) {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      elevation={0}
      style={{ backgroundColor: "#314e58" }}
    >
      <Container maxWidth="lg">
        <Toolbar className={classes.toolBar}>
          <div className={classes.title}>
            <Typography variant="h4" style={{ fontFamily: "Brush Script Std" }}>
              {"Citrine"}
            </Typography>
            {/* <Typography
              variant="caption"
              style={{ fontFamily: "Brush Script Std" }}
            >
              {"L'atelier Digital"}
            </Typography> */}
            <Grid
              style={{
                marginTop: 7,
              }}
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <PhoneIcon className={classes.contactIcons} />
              </Grid>
              <Grid item>
                <Typography variant="body1"> {"072862762"}</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <EmailIcon className={classes.contactIcons} />
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  {"contact@citrine-digital.com"}
                </Typography>
              </Grid>
            </Grid>
          </div>

          <div className={classes.linksContainer}>
            <NavBarLink
              name="home"
              type="footer"
              handleScroll={() => scrollToRef(homeRef)}
              aria-label="Home"
            />
            <NavBarLink
              name="about "
              type="footer"
              handleScroll={() => scrollToRef(aboutRef)}
              aria-label="About"
            />
            <NavBarLink
              name="services "
              type="footer"
              handleScroll={() => scrollToRef(servicesRef)}
              aria-label="Services"
            />
            <NavBarLink
              name="contact "
              type="footer"
              handleScroll={() => scrollToRef(contactRef)}
              aria-label="Contact"
            />
          </div>
          <div className={classes.iconsContainer}>
            <IconButton aria-label="Facebook">
              <FacebookIcon className={classes.socialMediaIcon} />
            </IconButton>
            <IconButton aria-label="LinkedIn">
              <LinkedInIcon className={classes.socialMediaIcon} />
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
