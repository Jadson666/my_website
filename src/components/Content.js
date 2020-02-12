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
  height: ${({ contentheight }) => contentheight + 'px'};
`

const VideoBLock = styled.video`
  width: 100%;
  z-index: 0;
  position: absolute;
  top: 0;
`
const D = styled.div`
  position: relative;
  background: black;
  z-index: -1;
  overflow: hidden;
`

export const Content = ({ index }) => {
  return (
    <Fragment>
      <D>
        <VideoBLock autoPlay loop muted poster="poster.jpg">
          <source src="/HD.mp4" type="video/mp4"></source>
        </VideoBLock>
        <DivForTransition contentheight={categoryConfig[index].contentHight}>
          <Route path="/">
            <Redirect to={`/${categoryConfig[0].title}`} />
          </Route>
          {Routes}
        </DivForTransition>
      </D>
    </Fragment>
  )
}
