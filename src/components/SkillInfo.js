import React from 'react'
import styled from 'styled-components'

const SkillLogoPic = styled.img`
  width: ${({ size }) => size + 'px'};
  height: ${({ size }) => size + 'px'};
`

const SkillInfoContainer = styled.div`
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #96999c;
`

export const SkillInfo = ({ src, width, logoSize = 150, children = '' }) => {
  return (
    <SkillInfoContainer style={{ width }}>
      <SkillLogoPic size={logoSize} src={src} />
      <div>{children}</div>
    </SkillInfoContainer>
  )
}
