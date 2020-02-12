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

export const Specialized = () => {
  return (
    <Container className="page">
      唐教授表示，這幅作品其實是顏真卿的一份手稿，所以上面有一些劃掉的字和作者寫下的一些注釋，而這卻令這份真跡愈加珍貴。《祭侄文稿》的最終成品早已不知所終。<br/>
      該份手稿在數百年裏一直保存在中國大陸，直到逃離大陸的國民黨政府帶著一批中國文物移至台灣，其中就包括這幅書法手稿。<br/>
      之後，它就一直被保存在國立故宮博物院。<br/>
      1997年，它曾出借給美國華盛頓的國家美術館（National Gallery of<br/>
      Art），之後又一直存放在台灣。這一次外借至東京，是它有史以來第二次出借至海外。<br/>
      現在，它以「顏真卿：超越王羲之的書法名家」的名目正在東京上野的東京國立博物館平成館展出。<br/>
      博物館的展覽說明指，顏真卿「在他的書法中出色地反映了當時對時代的領悟」，而《祭侄文稿》當中更是透出了作者的哀傷。<br/>
    </Container>
  )
}
