import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <footer
      id="contact"
      className={styles.container}
    >
      <div className={styles.divider1} />
      <div className={styles.text}>
        <h2>Get in touch</h2>
      </div>
      <form className={styles.form}>
        <div className={styles.row1}>
          {' '}
          <input
            className={styles.inputs}
            placeholder="First name"
            type="text"
          />
          <input
            className={styles.inputs}
            placeholder="Last name"
            type="text"
          />
        </div>
        <div className={styles.row2}>
          <input
            className={styles.inputs}
            placeholder="Email"
            type="email"
          />
          <input
            className={styles.inputs}
            placeholder="Phone number"
            type="text"
          />
        </div>
        <textarea
          placeholder="Message"
          className={styles.message}
        />
      </form>
      <button className={styles.submit}>Submit</button>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/emailIcon.png')}
            alt="Email Icon"
          />
          <a href="mailto:ozair.hassan123@gmail.com">Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/linkedinIcon.png')}
            alt="Linked in Icon"
          />
          <a href="https://www.linkedin.com">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/githubIcon.png')}
            alt="Github Icon"
          />
          <a href="https://www.Github.com">git</a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact
