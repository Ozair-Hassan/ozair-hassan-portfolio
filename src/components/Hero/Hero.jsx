import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'
import { motion } from 'framer-motion'
import { ComputersCanvas } from '../Canvas'

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
      <ComputersCanvas />
      <div className={styles.scrollPrompt}>
        <a href="#about">
          <div className={styles.scroll}>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className={styles.scrollDot}
            />
          </div>
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero
