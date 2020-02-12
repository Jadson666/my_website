import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 800px;
  padding: 100px 80px;
  margin: auto;
  line-height: 38px;
  font-size: 1.1em;
  text-align: center;
`

export const AboutMe = () => {
  return (
    <Container className='page'>
      資管系畢業，雖然沒走上程式開發這條路，但喜歡美的事物更勝程式碼，也算是個能和工程師們溝通的”少數”設計師之一<br />
      在接案公司待過四年、行銷公司設計活動網頁三年，算是各大行業的網站都有經驗<br />
      而且都是獨立完成專案的，誤打誤撞走上了 SOHO 這條辛苦路<br />
      <br />
      十幾年設計經驗的 Web Designer<br />
      愛音樂、愛電影、愛閱讀、愛自助旅行，得了一種想把網站都變美好的病<br />
      所以對於版型設計及語法的細節我會比較龜毛，因此對於時間比較趕、會催件壓時限的老闆們說聲抱歉了<br />
      但我會專注於好好的把網站設計好，好看當然也要好用，所以開始增加 WordPress 的接案業務<br />
      以前就幫公司管理架設過 WordPress 網站，對於我這個不想寫程式的設計師來說<br />
      是個超級好用的開發工具，節省你的程式開發費用，也更節省您的寶貴時間<br />
      <br />
      看完我的作品和我的介紹，如果願意和我聊聊該如何建立一個您的好品牌，歡迎加我 LINE 好友聊聊、免費諮詢，也歡迎利用表單來索取報價單哦！<br />
    </Container>
  )
}
