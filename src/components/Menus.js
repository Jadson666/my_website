import React from 'react'
import styled from 'styled-components'
import { categoryConfig } from './categories'
import { Link } from 'react-router-dom'

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
    return (
      <Link to={`/${v.title}`}>
        <OneMenu onClick={() => setIndex(i)}>{v.title}</OneMenu>
      </Link>
    )
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
