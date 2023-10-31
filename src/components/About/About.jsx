import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

const About = () => {
  return (
    <section
      className={styles.container}
      id="about"
    >
      <div className={styles.container2}>
        <h2 className={styles.title}> {'<about>'} </h2>
        <div className={styles.content}>
          <img
            src={getImageUrl('placeHolder.png')}
            alt="sitting"
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img
                src={getImageUrl('about/cursorIcon3.png')}
                alt="cursor"
              />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  voluptates quod alias ea ratione tenetur eligendi
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img
                src={getImageUrl('about/serverIcon3.png')}
                alt="Server"
              />
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum voluptates magni, debitis provident beatae est
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img
                src={getImageUrl('about/uiIcon3.png')}
                alt="UI"
              />
              <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas sunt reprehenderit dolores aut quas sequi
                </p>
              </div>
            </li>
          </ul>
        </div>
        <h2 className={styles.title2}> {'</about>'} </h2>
      </div>
      <div className={styles.divider1} />
    </section>
  )
}

export default About
