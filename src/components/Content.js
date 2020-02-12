import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Route, Redirect } from 'react-router-dom'
import { categoryConfig } from './categories'
import { CSSTransition } from 'react-transition-group'

const Routes = categoryConfig.map((v) => {
  return (
    <Route path={`/${v.title}`} exact>
      {({ match }) => {
        return (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {v.content}
          </CSSTransition>
        )
      }}
    </Route>
  )
})

const DivForTransition = styled.div`
  height: ${({contentheight})=> contentheight + 'px'};
`

export const Content = ({ index }) => {
  return (
    <DivForTransition contentheight={categoryConfig[index].contentHight}>
      <Route path="/">
        <Redirect to={`/${categoryConfig[0].title}`} />
      </Route>
      {Routes}
    </DivForTransition>
  )
}
