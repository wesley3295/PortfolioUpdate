import React from "react";
import "./Resume.css";
const Resume = () => {
  return (
    <div>
      <div
        className="portfolio__resume"
        id="portfolio__resume"
        style={{ display: "none" }}
      >
        <i id="resume__exit" className="far fa-times-circle resume__exit"></i>

        {/* <object data="resume.pdf" type="application/pdf" width="100%" height="100%">
    <a href="resume.pdf"></a>
</object> */}
      </div>
    </div>
  );
};

export default Resume;
