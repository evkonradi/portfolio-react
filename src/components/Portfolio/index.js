import React, { useState } from "react";

function Portfolio() {

    const [projects] = useState([
        {
            fileName : './assets/projects/cardsocial.png',
            title: 'CardSocial',
            technology: 'Node.js/Express/MySQL/Sequelize/JavaScript',
            githubLink: 'https://github.com/evkonradi/CardSocial',
            deployedLink: ''
        },
        {
            fileName : './assets/projects/project3.jpg',
            title: 'Calculator',
            technology: 'React/JavaScript/CSS',
            githubLink: '',
            deployedLink: ''
        },
        {
            fileName : './assets/projects/project_4.png',
            title: 'Pastel Puzzels',
            technology: 'MERN Stack',
            githubLink: '',
            deployedLink: ''
        },
        {
            fileName : './assets/projects/project5.jpg',
            title: 'Run Buddy',
            technology: 'HTML/CSS',
            githubLink: '',
            deployedLink: ''
        }
    ])

    return (
        <section id="projects" className="section-container">
            <div className="section-left">
                <h2>Portfolio</h2>
                <p className="about-me-p">
                    <br></br>
                    Below I introduce some of my projects. Please click the links for each project to proceed to the GitHub repository and deployed application.
                    <br></br>
            </p>
            </div>
            <div className="section-right work-grid">
                <article className="work-grid-item work-grid-item-1">
                    <div className="card work-card-flex">
                        <a href = "https://github.com/pochobs/project1" className="work-card-link">
                            <p className="work-card-title">Rentz rentals</p>
                            <p className="work-card-subtitle">Server APIs/JavaScript/CSS Foundation</p>
                        </a>
                    </div>
                </article>
                {projects.map((project, i) => (
                        <article key={project.title} className={`work-grid-item work-grid-item-${i+2}`}>
                            <div className="card work-card-flex">
                                <a className="work-card-link" href ={`${project.githubLink}`}  >
                                    <p className="work-card-title">{project.title}</p>
                                    <p className="work-card-subtitle">{project.technology}</p>
                                </a>
                            </div>
                        </article>
            ))}
            </div>

        </section>
    )
}

export default Portfolio;