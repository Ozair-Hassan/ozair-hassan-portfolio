import React from 'react'
import projects from '../../data/projects.json'
import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'
const Projects = () => {
  return (
    <section
      className={styles.container}
      id="projects"
    >
      <div className={styles.divider1} />
      <h2 className={styles.title}> {'<projects>'} </h2>
      <div className={styles.projects}>
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              project={project}
            />
          )
        })}
      </div>
      <h2 className={styles.title2}> {'</projects>'} </h2>
      <div className={styles.divider2} />
    </section>
  )
}

export default Projects
