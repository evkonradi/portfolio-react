import React from "react";

function Resume() {

    const frontEnd = ['HTML','CSS','JavaScript','responsive design','React','Bootstrap'];
    const backEnd = ['APIs','Node', 'Express','MySQL, Sequelze','MongoDB, Mongoose','REST'];

    return (
        <section className="section-container">
            <div className="section-left">
                <h2>Resume</h2>
            </div>     
            <div className="section-right">
                <p className="about-me-p">
                    Download my <a href="./assets/resume/Resume_EK.pdf" target="_blank">Resume</a>
                </p>
                <p className="about-me-p">
                    <h3>Front-end Proficiencies</h3>
                    <ul className='ul-resume'>
                        {frontEnd.map((skill) => (
                            <li key={skill}>
                                <span>
                                        {skill}
                                </span>
                            </li>
                        ))}
                    </ul>                    
                </p>
                <p className="about-me-p">
                    <h3>Back-end Proficiencies</h3>
                    <ul className='ul-resume'>
                        {backEnd.map((skill) => (
                            <li key={skill}>
                                <span>
                                        {skill}
                                </span>
                            </li>
                        ))}
                    </ul>                    
                </p>
            </div>       

        </section>
    )
}

export default Resume;