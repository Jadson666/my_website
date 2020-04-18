import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { categoryConfig, homePageConfig } from './categories'
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

Routes.unshift(
  <Route path="/" exact>
    {({ match }) => {
      return (
        <CSSTransition
          in={match != null}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          {homePageConfig.content}
        </CSSTransition>
      )
    }}
  </Route>
)

const DivForTransition = styled.div`
  height: ${({ contentheight }) => contentheight + 'px'};
`

const D = styled.div`
  position: static;
  overflow-x: hidden;
`

export const Content = ({ index }) => {
  const contentHight = index === -1 ? homePageConfig.contentHight: categoryConfig[index].contentHight
  return (
    <Fragment>
      <D>
        <DivForTransition contentheight={contentHight}>
          {Routes}
        </DivForTransition>
      </D>
    </Fragment>
  )
}
