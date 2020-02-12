import React, { useState } from 'react'
import styled from 'styled-components'
import { CarouselBlock } from './components/CarouselBlock'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.module.css'
import { EmailForm } from './components/EmailForm'
import Modal from 'react-modal'
import { Menus } from './components/Menus'
import '@fortawesome/fontawesome-free/css/all.css'
import { Footer } from './components/Footer'
import AlertTemplate from 'react-alert-template-basic'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import { Content } from './components/Content'


const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

const Container = styled.div`
`

const Header = styled.div`
  background-color: #313030;
  height: 70px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
`

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
    alignItems: 'center'
  }
}

const Name = styled.div`
  font-family: 'Edwardian script ITC';
  font-size: 2rem;
`


export const App = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  const [index, setIndex] = useState(0)
  return (
    <AlertProvider template={AlertTemplate} {...options}> {/* hook wrapper for react-alert */}
    <Container>
      <Header>
        <Name>Jadson</Name>
        <Menus setIndex={setIndex} openModal={openModal} />
      </Header>
      <CarouselBlock index={index} setIndex={setIndex} />
      <Content/>
      <Footer />
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        style={style}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick
      >
        <EmailForm closeModal={closeModal}></EmailForm>
      </Modal>
    </Container>
    </AlertProvider>
  )
}
