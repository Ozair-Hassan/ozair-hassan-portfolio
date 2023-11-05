import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I am <br></br>Ozair Hassan
        </h1>
        <p className={styles.description}>Aspiring full stack developer</p>
        <div className={styles.buttons}>
          {' '}
          <a
            href="/Resume%20Ozair%20Hassan%20V2.pdf"
            download="Ozair Hassan.pdf"
            className={styles.download}
          >
            Download CV
          </a>
          <a
            href="#projects"
            className={styles.contactBtn}
          >
            Projects
          </a>
        </div>
      </div>

      <img
        src={getImageUrl('placeHolder.png')}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero
