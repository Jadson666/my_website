import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { DotLoader } from 'react-spinners'
import styled from 'styled-components'
import { useAlert } from 'react-alert'

const InputGroup = styled.div`
  display: flex;
  align-items: center;
`

export const EmailForm = ({ closeModal }) => {
  const [feedback, setFeedback] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isloading, setIsloading] = useState(false)
  const alert = useAlert()

  const handleSubmit = async (event) => {
    if (feedback === '') {
      alert.error('No! do not send me an empty feedback')
      return false
    }
    setIsloading(true)
    const templateId = 'template_QbxuLxpp'

    try {
      await emailjs.send(
        'outlook',
        templateId,
        {
          message_html: feedback,
          from_name: name,
          reply_to: email
        },
        'user_Bd6927NBiQ63ByVQ8Fqlg'
      )
      alert.show('Email successfully sent!')
      closeModal()
    } catch (error) {
      alert.error('something wrong, fail to send mail')
      console.error(
        'Oh well, you failed. Here some thoughts on the error that occured:',
        error
      )
    } finally {
      setIsloading(false)
    }
  }

  return (
    <form className="test-mailing">
      <button
        style={{ marginBottom: 10 }}
        type="button"
        className="close"
        aria-label="Close"
        onClick={closeModal}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
        </div>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="What's your name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isloading}
        />
      </div>
      <div>
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="mail"
              onChange={(e) => setEmail(e.target.value)}
              disabled={isloading}
              value={email}
            />
            <small id="emailHelp" className="form-text text-muted">
              I'll never share your email with anyone else.
            </small>
          </div>
        <div className="form-group">
          <label htmlFor="test-mailing">Your Message</label>
          <textarea
            className="form-control"
            id="test-mailing"
            name="test-mailing"
            rows="7"
            required
            onChange={(e) => setFeedback(e.target.value)}
            value={feedback}
            disabled={isloading}
          ></textarea>
        </div>
      </div>
      <InputGroup>
        <input
          type="button"
          value="Submit"
          className="btn btn-secondary"
          onClick={handleSubmit}
          disabled={isloading}
        />
        <div style={{ padding: 5, marginLeft: 10 }}>
          <DotLoader loading={isloading} size={20} color={'#585a5d'} />
        </div>
      </InputGroup>
    </form>
  )
}
