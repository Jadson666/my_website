import React from 'react'
import styled from 'styled-components'
import { Icon } from '../Icons/Icon'

const FooterContainer = styled.div`
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

export const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Copyright: Jadson 個人工作室
      <IconBlock>
        <Icon type="linkedIn" />
        <Icon type="instagram" />
        <Icon type="youtube" />
        <Icon type="facebook" />
      </IconBlock>
    </FooterContainer>
  )
}
