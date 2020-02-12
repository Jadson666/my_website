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
import { Icon } from './Icons/Icon'

// import Footer from './components/Footer'

const Container = styled.div`
  height: 100%;
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

const Footer = styled.div`
  position: relative;
  width: 100%;
  padding: 10px 50px;
  background-color: #000;
  color: #ccc9c9;
`

const IconBlock = styled.div`
  position: absolute;
  right: 20px;
  top: 6px;
  display: flex;
  align-items: center;
  width: 150px;
  justify-content: space-between;
`

export const App = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  const [index, setIndex] = useState(0)
  return (
    <Container>
      <Header>
        <Name>Jadson</Name>
        <Menus setIndex={setIndex} openModal={openModal} />
      </Header>
      <CarouselBlock index={index} setIndex={setIndex} />
      <Footer>
        &copy; {new Date().getFullYear()} Copyright: Jadson 個人工作室
        <IconBlock>
          <Icon type="linkedIn" />
          <Icon type="instagram" />
          <Icon type="youtube" />
          <Icon type="facebook" />
        </IconBlock>
      </Footer>
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
  )
}
