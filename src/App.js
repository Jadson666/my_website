import React from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'
import { CarouselBlock } from './components/CarouselBlock'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.module.css'
import { EmailForm } from './components/EmailForm'
import Modal from 'react-modal'

const Container = styled.div``

const Header = styled.div`
  background-color: black;
  height: 70px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  font-size: 1.5rem;
`

const ContactButton = styled.button``

const style = {
  content: {
    width: '600px',
    top: 'unset',
    bottom: 'unset',
    left: 'unset',
    right: 'unset'
  },
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export const App = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  return (
    <Container>
      <Header>
        Jadson
        <ContactButton
          type="button"
          className="btn btn-primary"
          onClick={() => setIsOpen(true)}
        >
          Contact Me
        </ContactButton>
      </Header>
      <CarouselBlock />
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        style={style}
      >
        <EmailForm></EmailForm>
      </Modal>
    </Container>
  )
}
