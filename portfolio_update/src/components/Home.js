import React, {useState} from 'react'
import './Home.css'
import Resume from './Resume'
const Home = () => {
    const [resumeDisplay, setResumeDisplay] = useState("none")
    const renderResume = () => {
        setResumeDisplay("inline")
    }
    console.log(resumeDisplay)
    return (
        <>
            <div id="portfolio__container" className="portfolio__container">

                <h1>Wesley Spencer</h1>

                <div className="portfolio__links">
                    <a href="https://github.com/wesley3295"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/web-dev-spencer/"><i className="fab fa-linkedin"></i></a>
                    <a href="https://wesley3295.medium.com/"><i className="fab fa-medium-m"></i></a>
                    <a href="wesley3295@gmail.com"><i className="far fa-envelope"></i></a>
                    <i onClick={renderResume} className="far fa-file portfolio__resumeIcon"></i>
                </div>
                <p>A Full-Stack Software Engineer with experience in developing React, Redux, and Ruby-on-Rails web applications. Adaptable and driven with a strong work ethic, always looking to build and grow scalable applications to solve real-world problems. I bring strong skills in research, debugging, and communication to the team with experience in leadership and the desire to help others. Ability to thrive in a flexible team environment, demonstrate critical decision-making skills, and have strong interpersonal and communication abilities. All and more of which stem from my 10 years experience working in the Hospitality Industry.  </p>
            </div>
                    <Resume resumeDisplay={resumeDisplay} setResumeDisplay={setResumeDisplay} />
           
        </>
    )
}

export default Home
