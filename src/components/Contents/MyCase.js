import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 800px;
  padding: 100px 80px;
  margin: auto;
  line-height: 38px;
  font-size: 1.1em;
  text-align: center;
  color: white;
`

export const MyCase = () => {
  return (
    <Container className='page'>
      The Cases I have ever accomplished
    </Container>
  )
}
