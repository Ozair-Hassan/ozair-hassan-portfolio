import React from 'react'
import skills from '../../data/skills.json'
import history from '../../data/history.json'
import { getImageUrl } from '../../utils'
import styles from './Skills.module.css'
const Experiance = () => {
  return (
    <>
      <section
        id="experiance"
        className={styles.container}
      >
        <h2 className={styles.title}> {'<skills>'} </h2>
        <div className={styles.content}>
          <div className={styles.skills}>
            {skills.map((skill, index) => {
              return (
                <a
                  key={index}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.hyper}
                >
                  <div className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                      <img
                        src={getImageUrl(skill.imageSrc)}
                        alt={skill.title}
                      />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
        <h2 className={styles.title2}> {'</skills>'} </h2>
      </section>
    </>
  )
}

export default Experiance
