import React, { useState } from "react";

function Portfolio() {

    const [projects] = useState([
        {
            fileName : './assets/projects/cardsocial.png',
            title: 'Card Social',
            technology: 'Node.js|Express|MySQL|Sequelize|MVC|JavaScript',
            githubLink: 'https://github.com/evkonradi/CardSocial',
            deployedLink: 'https://cryptic-shelf-96558.herokuapp.com/'
        },
        {
            fileName : './assets/projects/rentzsite.jpg',
            title: 'Rentz Rentals',
            technology: 'Server APIs|JavaScript|CSS Foundation',
            githubLink: 'https://github.com/evkonradi/Rentz',
            deployedLink: 'https://evkonradi.github.io/Rentz/'
        },
        {
            fileName : './assets/projects/badget-tracker.jpg',
            title: 'Badget Tracker',
            technology: 'Node|Express|MongoDB|PWA|Heroku|Atlas MongoDB',
            githubLink: 'https://github.com/evkonradi/badget-tracker',
            deployedLink: 'https://arcane-ravine-44020.herokuapp.com/'
        },
        {
            fileName : './assets/projects/tech-blog.jpg',
            title: 'Tech Blog',
            technology: 'Node|Express|MySQL|MVC|ORM',
            githubLink: 'https://github.com/evkonradi/techBlog',
            deployedLink: 'https://immense-reaches-05057.herokuapp.com/'
        },
        {
            fileName : './assets/projects/e-commerce-APIs.jpg',
            title: 'E-Commerce Server-side APIs',
            technology: 'Node|Express|MySQL|Insomnia',
            githubLink: 'https://github.com/evkonradi/e-commerce',
            deployedLink: 'https://drive.google.com/file/d/11fDNyAmj2zRqzddM2fHlUWQJWdoG6hqJ/view?usp=sharing'
        },
        {
            fileName : './assets/projects/weather-dashboard.jpg',
            title: 'Weather Dashboard',
            technology: 'HTML|JavaScript|Bootstrap|Server-side APIs',
            githubLink: 'https://github.com/evkonradi/WeatherDashboard',
            deployedLink: 'https://evkonradi.github.io/WeatherDashboard/'
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
                        <a href = "https://github.com/evkonradi/teach-me-to" className="work-card-link">
                            <p className="work-card-title">Teach Me To</p>
                            <p className="work-card-subtitle">Mongo|Express|React|Node|GraphQL|PWA</p>
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