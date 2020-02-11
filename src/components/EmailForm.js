import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export const EmailForm = () => {
  const [feedback, setFeedback] = useState('')
  const [name, setName] = useState('Name')
  const [email, setEmail] = useState('email@example.com')

  const handleChange = (event) => {
    setFeedback(event.target.value)
  }

  const handleSubmit = (event) => {
    const templateId = 'template_QbxuLxpp'
    if (feedback === '') return false
    sendFeedback(templateId, {
      message_html: feedback,
      from_name: name,
      reply_to: email
    })
  }

  const sendFeedback = (templateId, variables) => {
    emailjs
      .send('outlook', templateId, variables, 'user_Bd6927NBiQ63ByVQ8Fqlg')
      .then((res) => {
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        )
      )
  }
  return (
    <form className="test-mailing">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="your gmail"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              @gmail.com
            </span>
          </div>
        </div>
        <div className="form-group">
          <label for="test-mailing">Your Message</label>
          <textarea
            className="form-control"
            id="test-mailing"
            name="test-mailing"
            rows="7"
            required
            onChange={handleChange}
            value={feedback}
          ></textarea>
        </div>
      </div>
      <input
        type="button"
        value="Submit"
        className="btn btn-secondary"
        onClick={handleSubmit}
      />
    </form>
  )
}
