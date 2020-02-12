import React from 'react'
import styled from 'styled-components'
import { categoryConfig } from './categories'

const ContactButton = styled.button``

const OneMenu = styled.div`
  display: inline-block;
  padding: 8px 5px;
  color: #fff;
  margin-right: 25px;
  cursor: pointer;
  font-size: 1.2rem;
`

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`


export const Menus = ({ openModal, setIndex }) => {
  const MenuItems = categoryConfig.map((v, i) => {
    return <OneMenu onClick={() => setIndex(i)}>{v.title}</OneMenu>
  })
  return (
    <MenuContainer>
      {MenuItems}
      <ContactButton
        type="button"
        className="btn btn-primary"
        onClick={openModal}
      >
        Contact Me
      </ContactButton>
    </MenuContainer>
  )
}
