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
            src={getImageUrl('aboutImage.png')}
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
                  {/* Proficient in front-end development with practical expertise
                  in technologies such as JavaScript (ES6+), React.js, Redux,
                  Tailwind CSS, Material-UI, and Three.js. */}
                  Familiar with the basics of front-end development, including
                  foundational knowledge of JavaScript (ES6+), React.js, and CSS
                  frameworks like Tailwind CSS. Beginning to apply these tools
                  in creating simple yet effective user interfaces, with a keen
                  interest in learning and applying modern web technologies.
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
                  {/* Skilled in back-end development with experience in Node.js
                  (Express.js), PHP, and Firebase, including integrating with
                  APIs for dynamic web applications. */}
                  Introduced to back-end development with an understanding of
                  Node.js (Express.js) and PHP. Gaining experience in
                  integrating APIs and managing backend processes, with a focus
                  on developing skills for building reliable web services.
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
                  {/* Adept in employing design tools and principles to craft
                  engaging user interfaces and experiences. Projects showcase
                  the use of Three.js for dynamic 3D elements, and a strong
                  understanding of UI/UX design */}
                  Engaging with design tools to understand the essentials of web
                  design. Experimenting with Three.js for interactive elements
                  and exploring the principles of UI/UX to contribute to
                  user-friendly web application designs, while continuously
                  seeking to enhance design skills.
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
