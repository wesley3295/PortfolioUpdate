import React, {useState} from 'react'
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

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PictureAsPdfOutlinedIcon from '@material-ui/icons/PictureAsPdfOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import GRAY_IMAGE1 from '../grayMe1.jpg'
import COLOR_IMAGE1 from '../colorMe1.jpg'

const y = 50;
const x = 50;
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    position: 'absolute',
    left: `${43}%`,
    top: `${0}%`,
    transform: `translate(${x}px, ${y}px)`,
    backgroundColor:"rgba(0,0,0,0.8)",
    
},
media: {
    height: 423,
    paddingTop: '56.25%', // 16:9,
    filter: "grayscale(100%)",
    transitionDuration:"1000ms",
    transitionProperty: "backgroundImage",

  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  spacing:{
      paddingLeft:"30px",
      
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

const colorPhoto = (e) =>{
    e.target.style.filter = "grayscale(0%)"
}
const grayPhoto=(e)=>{
    e.target.style.transitionDelay = "2s"
    // e.target.style.transitionDuration = "1000ms"
    // e.target.style.transitionProperty = "backgroundImage"
    e.target.style.filter = "grayscale(100%)"
}
  return (
  
    <Card className={classes.root} >
     
      <CardMedia
        className={classes.media}
        image={COLOR_IMAGE1}
        title="Picture"
        onMouseEnter={(e) => colorPhoto(e)}
        onMouseLeave={(e) => grayPhoto(e)}
      />
      <CardContent>
        <Typography variant="body2" color="colorTextPrimary" component="p" style={{color:"white"}}>
        A Full-Stack Software Engineer with experience in developing React, Redux, and Ruby-on-Rails web applications. Adaptable and driven with a strong work ethic, always looking to build and grow scalable applications to solve real-world problems. I bring strong skills in research, debugging, and communication to the team with experience in leadership and the desire to help others. Ability to thrive in a flexible team environment, demonstrate critical decision-making skills, and have strong interpersonal and communication abilities. All and more of which stem from my 10 years experience working in the Hospitality Industry.
        </Typography>
      </CardContent>
      <CardActions className={classes.spacing}  >
        <IconButton aria-label="Github"  style={{color:"white"}}>
          <GitHubIcon style={{ fontSize:"48px"}}/>
        </IconButton>
        <IconButton aria-label="LinkedIn"  style={{color:"white"}}>
          <LinkedInIcon style={{ fontSize:"48px"}} />
        </IconButton>
        <IconButton aria-label="Medium"  style={{color:"white"}}>
        <i className="fab fa-medium-m" style={{ fontSize:"48px"}}></i>
        </IconButton>
        <IconButton aria-label="E-Mail"  style={{color:"white"}}>
          <MailOutlineIcon style={{ fontSize:"48px"}}/>
        </IconButton>
        <IconButton aria-label="Resume.pdf"  style={{color:"white"}}>
          <PictureAsPdfOutlinedIcon style={{ fontSize:"48px"}}/>
        </IconButton>
        
      </CardActions>
      
    </Card>
  );
}
