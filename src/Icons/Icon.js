import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 5px;
`

export const Icon = ({ type = '' }) => {
  let Component = null
  switch (type) {
    case 'linkedIn':
      Component = <i class="fab fa-linkedin-in"></i>
      break
    case 'instagram':
      Component = <i class="fab fa-instagram"></i>
      break
    case 'facebook':
      Component = <i class="fab fa-facebook-f"></i>
      break
    case 'youtube':
      Component = <i class="fab fa-youtube"></i>
      break
    default:
      break
  }
  return (
    <Wrapper>
      {Component}
    </Wrapper>
  )
}
