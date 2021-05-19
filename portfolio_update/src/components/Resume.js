import "./Resume.css";
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
const Resume = ({resumeDisplay, setResumeDisplay}) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const exitResume=(e)=>{
    setResumeDisplay("none")
    e.target.parentNode.parentNode.style.display = resumeDisplay
  }
  return (
    <div className="portfolio__resume" style={{display:resumeDisplay}}>
      <div className="resume__exit"><i onClick={(e)=>exitResume(e)}id="resume__exit" className="far fa-times-circle"></i></div>
      
       <Document 
        file="resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
};

export default Resume;
