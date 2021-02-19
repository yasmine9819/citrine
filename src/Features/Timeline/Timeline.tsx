import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Card from "../Card";
import CreateIcon from "@material-ui/icons/Create";
import AssignmentIcon from "@material-ui/icons/Assignment";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import CheckIcon from "@material-ui/icons/Check";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      height: 60,
      width: 60,
      margin: "auto",
    },
    timeline: {
      [theme.breakpoints.down("xs")]: {
        padding: 0,
      },
      "& .MuiTimelineContent-root": {
        [theme.breakpoints.down("xs")]: {
          padding: 0,
        },
      },
      "& .MuiTimelineItem-missingOppositeContent": {
        "&::before": {
          [theme.breakpoints.down("xs")]: {
            display: "none",
          },
        },
      },
      "& .MuiTimelineConnector-root": {
        backgroundColor: "#5a7179",
      },
      "& .MuiTimelineDot-defaultGrey": {
        backgroundColor: "#af4900",
      },
    },
    timelineSeparator: {
      "& .MuiTimelineSeparator-root": {
        [theme.breakpoints.down("xs")]: {
          display: "none",
        },
      },
    },
  })
);

export default function BasicTimeline() {
  const classes = useStyles();
  const isSmDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("xs")
  );

  return (
    <Timeline
      align={isSmDown ? "left" : "alternate"}
      className={clsx(classes.timeline, classes.timelineSeparator)}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />

          <TimelineConnector style={{ backgroundColor: "#314e58" }} />
        </TimelineSeparator>
        <TimelineContent>
          <Card
            title={"CONCEPTION PRODUIT"}
            body={
              "Nous vous aidons à affiner votre idée, à concevoir un prototype et à le valider auprès de vos clients pour une meilleure expérience"
            }
            icon={<CreateIcon className={classes.icon} />}
            bodyStyle="h6"
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />

          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card
            title={"BACKLOG PRODUIT"}
            body={
              "Nous vous aidons à prioriser les fonctionnalités a impact business, à les découper en User Story et les détailler "
            }
            icon={<AssignmentIcon className={classes.icon} />}
            bodyStyle="h6"
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />

          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card
            title={"INCRÉMENT PRODUIT"}
            body={
              "On vous délivre des fonctionnalités testables à la fin de chaque sprint, plutôt que des composants techniques "
            }
            icon={<TrendingUpIcon className={classes.icon} />}
            bodyStyle="h6"
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />

          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card
            title={"MISE EN PRODUCTION"}
            body={
              "Une fois le produit minimum viable est prêt, il est déployé. les nouvelles fonctionnalités sont mises en production en continue"
            }
            icon={<CheckIcon className={classes.icon} />}
            bodyStyle="h6"
          />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
