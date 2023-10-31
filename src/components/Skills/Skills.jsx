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
                <div
                  key={index}
                  className={styles.skill}
                >
                  <div className={styles.skillImageContainer}>
                    <img
                      src={getImageUrl(skill.imageSrc)}
                      alt={skill.title}
                    />
                  </div>
                  <p>{skill.title}</p>
                </div>
              )
            })}
          </div>
          {/* <ul className={styles.history}>
      {history.map((historyItem, index) => {
        return (
          <li
            key={index}
            className={styles.historyItem}
          >
            {' '}
            <img
              src={getImageUrl(historyItem.imageSrc)}
              alt={`${historyItem.organisation} Logo`}
            />{' '}
            <div className={styles.historyItemDetails}>
              <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
              <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
              <ul>
                {historyItem.experiences.map((exp, index) => {
                  return <li key={index}> {exp}</li>
                })}
              </ul>
            </div>
          </li>
        )
      })}
    </ul> */}
        </div>
        <h2 className={styles.title2}> {'</skills>'} </h2>
        {/* <div className={styles.divider1} /> */}
      </section>
    </>
  )
}

export default Experiance
