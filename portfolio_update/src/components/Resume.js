import "./Resume.css";
import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from "@material-ui/core/IconButton";

const Resume = ({exitResume}) => {
 
  return (
    <div className="portfolio__resume" >
    <IconButton aria-label="Exit Resume"  className="resume__exit" style={{color:"white",padding:"0"}}>
    <HighlightOffIcon style={{fontSize:"40px",color: "white",margin:"0"}} onClick={(e)=>exitResume(e)}/>
    </IconButton>
       <PDFViewer
            document={{
                url: 'resume.pdf',
            }}
            
        />

    </div>
  );
};

export default Resume;
