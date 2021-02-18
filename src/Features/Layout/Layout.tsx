import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

export default function Layout({ children }: React.PropsWithChildren<any>) {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
