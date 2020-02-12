import React from 'react'
import styled from 'styled-components'
import { Icon } from '../Icons/Icon'

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 50px;
  background-color: #000;
  color: #ccc9c9;
`

const IconBlock = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  justify-content: space-between;
`

export const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Copyright: Jadson 個人工作室
      <IconBlock>
        <Icon type="linkedIn" hoverColor={'#47c1dc'}/>
        <Icon type="instagram" hoverColor={'#c57ac0'}/>
        <Icon type="youtube" hoverColor={'#ff3548'}/>
        <Icon type="facebook" hoverColor={'#47c1dc'}/>
      </IconBlock>
    </FooterContainer>
  )
}
