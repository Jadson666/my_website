import React, { useEffect, useRef, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import styles from './App.module.css'

const PICTURE_WIDTH = 800

const PicContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 50px;
`
const CarouselBackground = styled.div`
  background-image: url(/overlay.png), url(/bg.jpg);
  background-repeat: repeat, repeat-x;
  background-size: 128px 128px, cover;
`
export const App = () => {
  const WrapRef = useRef(null)
  let appDom
  const [index, setIndex] = useState(0)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    appDom = ReactDOM.findDOMNode(WrapRef.current)
    if (!appDom) {
      return
    }
    const carousel = appDom.querySelector('div.carousel')
    carousel.classList.add(styles.boxShadow)
  }, [])
  return (
    <CarouselBackground>
      <PicContainer ref={WrapRef}>
        <Carousel
          showArrows={true}
          width={PICTURE_WIDTH}
          showStatus={false}
          infiniteLoop={true}
          onChange={(i) => {
            setIndex(i)
          }}
        >
          <div>
            <img src="/content1.jpg" alt="content1" />
            <p className="legend">Our Cat</p>
          </div>
          <div>
            <img src="/content2.jpg" alt="content2" />
            <p className="legend">The Beautiful School</p>
          </div>
        </Carousel>
      </PicContainer>
    </CarouselBackground>
  )
}
