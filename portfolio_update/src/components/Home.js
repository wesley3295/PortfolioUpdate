import React, { useState } from "react";
// import './Home.css'
// import Resume from './Resume'
// const Home = () => {
//     const [resumeDisplay, setResumeDisplay] = useState("none")
//     const renderResume = () => {
//         setResumeDisplay("inline")
//     }
//     console.log(resumeDisplay)
//     return (
//         <>
//             <div id="portfolio__container" className="portfolio__container">

//                 <h1>Wesley Spencer</h1>

//                 <div className="portfolio__links">
//                     <a href="https://github.com/wesley3295"><i className="fab fa-github"></i></a>
//                     <a href="https://www.linkedin.com/in/web-dev-spencer/"><i className="fab fa-linkedin"></i></a>
//                     <a href="https://wesley3295.medium.com/"><i className="fab fa-medium-m"></i></a>
//                     <a href="wesley3295@gmail.com"><i className="far fa-envelope"></i></a>
//                     <i onClick={renderResume} className="far fa-file portfolio__resumeIcon"></i>
//                 </div>
//                 <p>A Full-Stack Software Engineer with experience in developing React, Redux, and Ruby-on-Rails web applications. Adaptable and driven with a strong work ethic, always looking to build and grow scalable applications to solve real-world problems. I bring strong skills in research, debugging, and communication to the team with experience in leadership and the desire to help others. Ability to thrive in a flexible team environment, demonstrate critical decision-making skills, and have strong interpersonal and communication abilities. All and more of which stem from my 10 years experience working in the Hospitality Industry.  </p>
//             </div>
//                     <Resume resumeDisplay={resumeDisplay} setResumeDisplay={setResumeDisplay} />

//         </>
//     )
// }

// export default Home

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PictureAsPdfOutlinedIcon from "@material-ui/icons/PictureAsPdfOutlined";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import COLOR_IMAGE1 from "../colorMe1.jpg";

export default function RecipeReviewCard() {
  const y = 50;
  const x = 50;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 350,
      [theme.breakpoints.down("xs")]: {
        marginRight: 100,
      },
      marginRight: 0,
      position: "absolute",
      top: `${10}%`,
      transform: `translate(${x}px, ${y}px)`,
      backgroundColor: "rgba(0,0,0,0.8)",
      overflow: "hidden",
    },
    media: {
      overflow: "hidden",
      height: 400,
      paddingTop: 0,
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
    spacing: {
      paddingRight: "10px",
    },
  }));
  const classes = useStyles();

  const colorPhoto = (e) => {
    console.log(e.target);
    e.target.style.filter = "grayscale(0%)";
  };
  const grayPhoto = (e) => {
    e.target.style.filter = "grayscale(100%)";
  };
  return (
    <Grid container justify="center" alignItems="center">
      <Card className={classes.root}>
        <Grid item>
          <CardMedia className={classes.media} title="Picture">
            <img
              src={COLOR_IMAGE1}
              alt=""
              height="400"
              width="350"
              style={{ filter: "grayscale(100%)" }}
              onMouseEnter={(e) => colorPhoto(e)}
              onMouseLeave={(e) => grayPhoto(e)}
            />
          </CardMedia>
        </Grid>
        <CardContent>
          <Typography
            variant="body2"
            color="colorTextPrimary"
            component="p"
            style={{ color: "white" }}
          >
            A Full-Stack Software Engineer with experience in developing React,
            Redux, and Ruby-on-Rails web applications. Adaptable and driven with
            a strong work ethic, always looking to build and grow scalable
            applications to solve real-world problems. I bring strong skills in
            research, debugging, and communication to the team with experience
            in leadership and the desire to help others. Ability to thrive in a
            flexible team environment, demonstrate critical decision-making
            skills, and have strong interpersonal and communication abilities.
            All and more of which stem from my 10 years experience working in
            the Hospitality Industry.
          </Typography>
        </CardContent>
        <CardActions className={classes.spacing}>
          <IconButton aria-label="Github" >
            <a href="https://github.com/wesley3295">
              <GitHubIcon style={{ fontSize: "40px",color: "white" }} />
            </a>
          </IconButton>
          <IconButton aria-label="LinkedIn" >
            <a
              href="https://www.linkedin.com/in/web-dev-spencer/"
            >
              <LinkedInIcon style={{ fontSize: "40px",color: "white" }} />
            </a>
          </IconButton>
          <IconButton aria-label="Medium" >
            <a
              href="https://wesley3295.medium.com/"
            >
              <i className="fab fa-medium-m" style={{ fontSize: "40px",color: "white" }}></i>
            </a>
          </IconButton>
          <IconButton aria-label="E-Mail" >
            <a href="mailto:wesley3295@gmail.com">
              <MailOutlineIcon style={{ fontSize: "40px",color: "white" }} />
            </a>
          </IconButton>
          <IconButton aria-label="Resume.pdf" >
            <PictureAsPdfOutlinedIcon style={{ fontSize: "40px",color: "white" }} />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
