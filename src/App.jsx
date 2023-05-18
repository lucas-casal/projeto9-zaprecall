import React from 'react'
import { useState } from 'react'
import Cards from './Cards'
import styled from 'styled-components';



function App() {
  const [active, setActive] = useState(false) //deixar true na versão final!!!!!!!


  return (
    <>
    <SCWelcomeBackground active={active}>
    <SCWelcomeLogo id='welcome-logo' src='./assets/logo.png'></SCWelcomeLogo>
    <SCWelcomeTitle>ZapRecall</SCWelcomeTitle>
    <SCStartBtn id='start-btn' onClick={()=>{setActive(false)}}>Iniciar Recall!</SCStartBtn>  
    </SCWelcomeBackground>

    <SCZapBackground id='zap-background'>
      <SCZapLogoContainer active={active}>
      <SCZapLogo id='zap-logo' src='./assets/logo.png'></SCZapLogo>
      <SCZapTitle>ZapRecall</SCZapTitle>
      </SCZapLogoContainer>
      <SCContent>
      <Cards active={active} />
      </SCContent>
      <SCBottom active={active}> 0/8 CONCLUÍDOS </SCBottom>
    </SCZapBackground>

    <div id="zap-bottom"></div>
      
    </>
  )
}

export default App

const SCWelcomeBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FB6B6B;
  display:${(props) => props.active ? 'flex' : 'none' } ;
  flex-direction: column;
  align-items: center;
`

const SCWelcomeLogo = styled.img`
  width: 136px;
  height: 161px;
  margin-top: 25%
`
const SCWelcomeTitle = styled.h1`
width: 257px;
height: 59px;
margin-top: 13px;
font-family: 'Righteous', cursive;
font-size: 36px;
font-weight: 400;
line-height: 45px;
letter-spacing: -0.012em;
text-align: center;
color: #FFFFFF;
`
const SCStartBtn = styled.button`
  width: 246px;
  height: 54px;
  color: #D70900;
  background-color: #FFFFFF;
  font-family: 'Recursive', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 30px;
  border: 1px solid #D70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`

const SCZapLogoContainer = styled.div`
position: fixed;
top:0;
left: 0;
width: 100%;
height: auto;
display: ${(props) => props.active ? 'none' : 'flex' } ;
flex-direction: row;
justify-content: center;
align-items: center;
padding-top: 42px;
background-color: #FB6B6B;
padding-bottom: 46px;
`

const SCZapLogo = styled.img`
  width: 52px;
  height: 60px;
 
`
const SCZapTitle = styled.h2`
width: 203.17px;
height: 44px;
font-family: 'Righteous', cursive;
font-size: 36px;
font-weight: 400;
line-height: 45px;
letter-spacing: -0.012em;
text-align: center;
color: #FFFFFF;
`
const SCZapBackground = styled.div`
width: 100%;
height: 100%;
padding-bottom: 100px;
background-color: #FB6B6B;
`
const SCContent = styled.div`
width: 100%;
height: 500px;
padding-bottom: 100px;
flex-direction: column;
align-items: center;
overflow-y: scroll;
padding-top: 150px;
`
const SCBottom = styled.div`
position: fixed;
bottom: 0;
left:0;
background-color: #FFFFFF;
width: 100%;
height: 70px;
display:${(props) => props.active ? 'none' : 'flex' } ;
align-items: center;
justify-content: center; 
color: #333333;
font-family: 'Recursive', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
`