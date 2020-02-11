import React, { useEffect, useRef, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import styles from '../App.module.css'
import { categoryConfig } from './categories'

const PICTURE_WIDTH = 800

const PicContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`
const CarouselBackground = styled.div`
  background-image: url(/overlay.png), url(/bg.jpg);
  background-repeat: repeat, repeat-x;
  background-size: 128px 128px, cover;
  height: calc(100% - 70px);
`

const PictureTitle = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-family: "Rasa","Muli","Microsoft JhengHei",Sans-serif;
  font-weight: 700;
`

const records = categoryConfig.map((v) => {
  return <div>{v.component}</div>
})

export const CarouselBlock = () => {
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
      <PictureTitle>{categoryConfig[index].title}</PictureTitle>
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
          {records}
        </Carousel>
      </PicContainer>
    </CarouselBackground>
  )
}
