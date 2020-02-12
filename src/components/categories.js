import React from 'react'
import { Specialized } from './Contents/Specialized'
import { MyCase } from './Contents/MyCase'
import { AboutMe } from './Contents/AboutMe'

export const categoryConfig = [
  {
    title: '擅長開發工具',
    component: <img src="/content1.jpg" alt="擅長開發工具" />,
    content: Specialized,
    contentHight: 250
  },
  {
    title: '網頁開發案例',
    component: <img src="/content2.jpg" alt="網頁開發案例" />,
    content: MyCase,
    contentHight: 250
  },
  {
    title: '關於我',
    component: <img src="/content3.jpg" alt="關於我" />,
    content: AboutMe,
    contentHight: 820
  },
]