import React from 'react'
import styled from 'styled-components'
import { SkillInfo } from '../SkillInfo'

const Container = styled.div`
  width: 800px;
  padding: 100px 80px;
  margin: auto;
  line-height: 38px;
  font-size: 1.1em;
  text-align: center;
  color: white;
  position: absolute;
  left: 0;
  right: 0;
`

const Intro = styled.div`
  width: 100%;
  height: 400px;
`

const ProfessionalPic = styled.img`
  width: 400px;
  margin-top: 30px;
  margin-left: 60px;
  box-shadow: 0 0 6px 3px #808080;
`

const TransArea = styled.div`
  width: 100%;
  margin-left: -15px;
`

const Skills = styled.div`
  display: flex;
  justify-content: space-around;
  height: 250px;
  width: 100%;
  padding: 0 102px;
`

const VideoBLock = styled.video`
  width: 100%;
  position: absolute;
`

const Limiter = styled.div`
  height: 700px;
  overflow-y: hidden;
  position: relative;
`

const SKILL_WIDTH = 200

export const Home = () => {
  return (
    <TransArea className="page">
      <Intro>
        <ProfessionalPic src="/professional.jpg" />
      </Intro>
      <Skills>
        <SkillInfo width={SKILL_WIDTH} src="/reactpng.png">
          React 是最適合建構大型應用程式的框架，
          且元件導向的特性讓程式碼更易讀，
          如果想建構企業級應用程式，React 是最佳選擇
        </ SkillInfo>
        <SkillInfo width={SKILL_WIDTH} src="/html.png">
          HTML 是網頁的基本架構，使用HTML有助於SEO讓客戶更容易搜尋到您的網站。
          使用HTML也能夠做出高度客製化的網站版型
        </SkillInfo>
        <SkillInfo width={SKILL_WIDTH} src="/css.png">
          CSS能刻畫出絢麗或平順的動畫，就看你的需要！讓使用者體驗更上一層樓，CSS更可以增進網頁開啟的效率，就要比別人快
        </SkillInfo>
        <SkillInfo width={SKILL_WIDTH} src="/js.png"></SkillInfo>
        <SkillInfo width={SKILL_WIDTH} src="/premiere.png"></SkillInfo>
        <SkillInfo width={SKILL_WIDTH} src="/photoshop.png"></SkillInfo>
      </Skills>
      <Limiter>
        <VideoBLock autoPlay loop muted poster="poster.jpg">
          <source src="/HD.mp4" type="video/mp4"></source>
        </VideoBLock>
        <Container>
          所以對於版型設計及語法的細節我會比較龜毛，因此對於時間比較趕、會催件壓時限的老闆們說聲抱歉了
          <br />
          但我會專注於好好的把網站設計好，好看當然也要好用，所以開始增加 WordPress
          的接案業務
          <br />
          以前就幫公司管理架設過 WordPress 網站，對於我這個不想寫程式的設計師來說
          <br />
          是個超級好用的開發工具，節省你的程式開發費用，也更節省您的寶貴時間
          <br />
          <br />
          看完我的作品和我的介紹，如果願意和我聊聊該如何建立一個您的好品牌，歡迎加我
          LINE 好友聊聊、免費諮詢，也歡迎利用表單來索取報價單哦！
          <br />
        </Container>
      </Limiter>
    </TransArea>
  )
}
