import React, { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [showNotification, setShowNotification] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const formRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formRef.current)
    setShowNotification(true) // Show the notification

    // Hide the notification after 2-3 seconds
    setTimeout(() => {
      setShowNotification(false)
    }, 2000) // Adjust time as needed
    emailjs
      .sendForm(
        'service_1td2a0x',
        'template_tpibdud',
        formRef.current,
        'I8_6WL1cu64Q_sju2'
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log('message sent')
          e.target.reset() // Reset form after successful submission
          setPhoneNumber('')
        },
        (error) => {
          console.log(error.text)
          // You can also handle errors more gracefully here
        }
      )
  }
  const handleEmailClick = () => {
    navigator.clipboard
      .writeText('ozair.hassan123@gmail.com')
      .then(() => {
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 2000) // Hide success message after 2 seconds
      })
      .catch((err) => {
        console.error('Failed to copy email:', err)
      })
  }

  const handleChange = (e) => {
    const value = e.target.value
    if (!isNaN(value) && value.length <= 13) {
      setPhoneNumber(value)
    }
  }

  return (
    <footer
      id="contact"
      className={styles.container}
    >
      <div className={styles.divider1} />
      <div className={styles.text}>
        <h2>Get in touch</h2>
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div className={styles.row1}>
          {' '}
          <input
            className={styles.inputs}
            placeholder="First name"
            type="text"
            name="user_fname"
            required
          />
          <input
            className={styles.inputs}
            placeholder="Last name"
            type="text"
            name="user_lname"
            required
          />
        </div>
        <div className={styles.row2}>
          <input
            className={styles.inputs}
            placeholder="Email"
            type="email"
            required
            name="user_email"
          />
          <input
            className={styles.inputs}
            placeholder="Phone number"
            name="user_phone"
            value={phoneNumber}
            onChange={handleChange}
            type="tel"
          />
        </div>
        <textarea
          placeholder="Message"
          name="user_msg"
          className={styles.message}
          required
        />
        <button
          type="submit"
          className={styles.submit}
        >
          Submit
        </button>
        {showNotification && (
          <div className={styles.notification}>Message Sent Successfully!</div>
        )}
      </form>

      <ul className={styles.links}>
        <li
          className={styles.link}
          onClick={handleEmailClick}
        >
          <img
            src={getImageUrl('contact/emailIcon.png')}
            alt="Email Icon"
          />
          <span>Email</span>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/linkedinIcon.png')}
            alt="Linked in Icon"
          />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ozair-hassan-8273811a4/"
          >
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/githubIcon.png')}
            alt="Github Icon"
          />
          <a
            target="_blank"
            href="https://github.com/Ozair-Hassan"
          >
            Github
          </a>
        </li>
      </ul>
      {showSuccess && (
        <div className={styles.successMessage}>
          Successfully copied email to clipboard
        </div>
      )}
    </footer>
  )
}

export default Contact
