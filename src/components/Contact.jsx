import { useState } from 'react'
import { personalInfo } from '../data/portfolio'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section contact">
      <div className="contact__grid">
        <div className="contact__info">
          <span className="section__label section__label--light">Contact</span>
          <h2 className="contact__title">Let&apos;s work together</h2>
          <p className="contact__intro">
            Have a project in mind or want to connect? Drop me a message — I&apos;d love to hear from you.
          </p>
          <a href={`mailto:${personalInfo.email}`} className="contact__email">
            {personalInfo.email}
          </a>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formState.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formState.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>
          <label htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
            />
          </label>
          <button type="submit" className="btn btn--light">Send message</button>
          {submitted && (
            <p className="contact__success" role="status">
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
