import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import NavBarLink from "./NavBarLink";
import { Container, Grid, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

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
        width: "-webkit-fill-available",
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

        width: "-webkit-fill-available",
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

export default function Footer() {
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
            <Typography variant="h6">{"Citrine"}</Typography>
            <Typography variant="caption">{"L'atelier Digital"}</Typography>
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
              <Grid item xs={2}>
                <PhoneIcon className={classes.contactIcons} />
              </Grid>
              <Grid item xs={10}>
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
              <Grid item xs={2}>
                <EmailIcon className={classes.contactIcons} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body1"> {"citrin@mail.com"}</Typography>
              </Grid>
            </Grid>
          </div>

          <div className={classes.linksContainer}>
            <NavBarLink name="home" type="footer" />
            <NavBarLink name="about " type="footer" />
            <NavBarLink name="services " type="footer" />
            <NavBarLink name="contact " type="footer" />
          </div>
          <div className={classes.iconsContainer}>
            <IconButton>
              <FacebookIcon className={classes.socialMediaIcon} />
            </IconButton>
            <IconButton>
              <LinkedInIcon className={classes.socialMediaIcon} />
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
