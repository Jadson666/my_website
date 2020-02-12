import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 5px;
  border: 3px solid gray;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition-property: color, border-color;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  &:hover {
    color: ${({ hoverColor }) => (hoverColor ? hoverColor : 'inherit')};
    border-color: ${({ hoverColor }) => (hoverColor ? hoverColor : 'inherit')};
  }
  &:hover > a > i {
    transition-property: font-size;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(.23,.8,.61,1.95);
    font-size: 1.3em;
  }
`

const Link = styled.a`
  color: inherit;
  &:hover,
  &:active,
  &:link,
  &:visited {
    color: inherit;
  }
`

const url = {
  facebook: 'https://www.facebook.com/profile.php?id=1663590478',
  youtube: 'https://www.youtube.com/watch?v=RfYZdr_hBf8',
  linkedIn: 'https://www.linkedin.com/in/jasonlin666/',
  instagram: 'https://www.instagram.com/amigo_brian/'
}

export const Icon = ({ type = '', hoverColor }) => {
  let Component = null
  switch (type) {
    case 'linkedIn':
      Component = <i className="fab fa-linkedin-in"></i>
      break
    case 'instagram':
      Component = <i className="fab fa-instagram"></i>
      break
    case 'facebook':
      Component = <i className="fab fa-facebook-f"></i>
      break
    case 'youtube':
      Component = <i className="fab fa-youtube"></i>
      break
    default:
      break
  }
  return (
    <Wrapper hoverColor={hoverColor}>
      <Link target="_blank" rel="noopener noreferrer" href={url[type]}>
        {Component}
      </Link>
    </Wrapper>
  )
}
