import React from "react";
import { useState } from "react";
import styled from 'styled-components';

const feedbackArray = [];
const forgotArray = [];
const congratsTitle = 'Parabéns!';
const congratsMsg = 'Você não esqueceu de nenhum flashcard!';

const sorryTitle = 'Putz...';
const sorryMsg = 'Ainda faltam alguns... Mas não desanime!'; 

export default function Card(card, props, deckLength){
    let [step, setStep] = useState(0);
    let [forgotIcon, setForgotIcon] = useState(false);
    let [almostIcon, setAlmostIcon] = useState(false);
    let [zapIcon, setZapIcon] = useState(false);
    


    function forgot(){
        setStep(3);
        setForgotIcon(true);
        let novoIcone = './assets/icone_erro.png'
        feedbackArray.push(novoIcone);
        forgotArray.push('-');
    }

    function almost(){
        setStep(3);
        setAlmostIcon(true);
        let novoIcone = './assets/icone_quase.png'
        feedbackArray.push(novoIcone);
    }
    
    function zap(){
        setStep(3);
        setZapIcon(true);
        let novoIcone = './assets/icone_certo.png'
        feedbackArray.push(novoIcone);
    }

    if(feedbackArray.length === deckLength){
        
    }


    let theEnd=(feedbackArray.length === deckLength);
    return(
        <>
        <SCCard data-test="flashcard" key={card.number} step={step} >
            <SCQuestion data-test="flashcard-text" step={step} forgotIcon={forgotIcon} almostIcon={almostIcon}>{step === 2? card.answer : step === 1 ? card.question : ('Pergunta ' + card.number) }</SCQuestion>
            <SCRevealQuestion data-test={step === 0 ? 'play-btn' : (step === 1 ? 'turn-btn' : (step === 3 ? (forgotIcon ? 'no-icon' : (almostIcon ? 'partial-icon' : (zapIcon ? 'zap-icon' : ''))):''))} step={step} onClick={()=>{step < 2 ? setStep(step + 1) : ""}} src ={step === 0 ? './assets/seta_play.png' : (step === 1 ? './assets/seta_virar.png' : (step === 3 ? (forgotIcon ? './assets/icone_erro.png' : (almostIcon ? './assets/icone_quase.png' : './assets/icone_certo.png')):''))} ></SCRevealQuestion>
            <SCAnswerBtns step={step}>
                <SCForgot data-test="no-btn" onClick={forgot}>Não lembrei</SCForgot>
                <SCAlmost data-test="partial-btn" onClick={almost}>Quase não lembrei</SCAlmost>
                <SCZap data-test="zap-btn" onClick={zap}>Zap!</SCZap>
            </SCAnswerBtns>
        </SCCard>
        <SCBottom data-test="footer" theEnd={theEnd} active={props.active}> 
            <SCFeedbackContainer data-test="finish-text">
                <SCFeedbackTitle theEnd={theEnd}>
                    <SCFeedbackImg src={feedbackArray.length === deckLength ? (forgotArray.length === 0 ? './assets/party.png' : './assets/sad.png') : '' }></SCFeedbackImg>
                    {feedbackArray.length === deckLength ? (forgotArray.length === 0 ? congratsTitle : sorryTitle) : '' }
                </SCFeedbackTitle>
                <SCFeedbackMsg theEnd={theEnd} >{feedbackArray.length === deckLength ? (forgotArray.length === 0 ? congratsMsg : sorryMsg) : '' }</SCFeedbackMsg>
            </SCFeedbackContainer>
            <SCProgress>{feedbackArray.length}/{deckLength} CONCLUÍDOS </SCProgress> 
            <SCIconsContainer>
                {feedbackArray.map((x) => {return (<SCBottomIcons data-test={x === './assets/icone_erro.png' ? 'no-icon' : (x === './assets/icone_quase.png' ? 'partial-icon' : (x === './assets/icone_certo.png' ? 'zap-icon' : '')) } src={x}></SCBottomIcons>)})}
            </SCIconsContainer>
        </SCBottom>
        </>
    )
}

//top: ${(x) => x.theEnd ? '480px' : '597px'};
const SCBottom = styled.div`
position: fixed;
bottom: 0;
left:0;
background-color: #FFFFFF;
width: 100%;
min-height: 70px;
max-height: 171px;
display:${(props) => props.active ? 'none' : 'flex' } ;
flex-direction: column;
align-items: center;
justify-content: center; 
gap: 10px;
padding-top: 10px;
padding-bottom: 20px;
border-top: 1px solid black;
`

const SCFeedbackContainer = styled.div`
width: 100%;
height: 100%;
`

const SCFeedbackImg = styled.img`
width: 23px;
height: 23px;
margin-right: 12px;
`

const SCFeedbackTitle = styled.div`
width: 100%;
height: 100%;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #333333;
text-align: center;
display: ${(x) => x.theEnd ? 'block' : 'none'}

`

const SCFeedbackMsg = styled.div`
width: 100%;
height: 100%;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
color: #333333;
padding-left: 5px;
padding-right: 5px;
white-space: normal;
display: ${(x) => x.theEnd ? 'flex' : 'none'}
`

const SCProgress = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center; 
justify-content: center; 
color: #333333;
font-family: 'Recursive', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
`

const SCBottomIcons = styled.img`
width: 23px;
height: 23px;
`

const SCIconsContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
`


const SCCard = styled.span`
width: 285px;
height: ${(x) => ((x.step < 3 && x.step !== 0) && x.step !== 0) ? '131px' : '65px'};
background-color: ${(x) => (x.step < 3 && x.step !== 0) ? '#FFFFD5' : '#FFFFFF'};
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-bottom: 25px;
display: flex;
flex-direction: ${(x) => x.step === 2 ? 'column' : 'row'};
align-items: ${(x) => (x.step < 3 && x.step !== 0) ? 'start' : 'center'};
padding-top: ${(x) => (x.step < 3 && x.step !== 0) ? '18px' : '0'};
justify-content: space-between;
padding-left: 15px;
`

const SCQuestion = styled.span`
color: #333333;
width: auto;
height: auto;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: ${(x) => x.step === 3 ? (x.forgotIcon ? '#FF3030' : (x.almostIcon ? '#FF922E' : '#2FBE34')) : 'black'};
text-decoration-line: ${(x) => x.step === 3 ? 'line-through' : 'none' };
`

const SCRevealQuestion = styled.img`
width: ${(x) => x.step === 0 ? '20px' : (x.step === 1 ? '30px' : '23px')};
height: ${(x) => x.step !== 1 ? '23px' : '20px'};
margin-top: ${(x) => x.step === 1 ? '105px' : '0'};
margin-right: 20px;
display: ${(x) => x.step !== 2 ? 'flex' : 'none'};


`

const SCAnswerBtns = styled.span`
width: 100%;
height: 37px;
display: flex;
margin-bottom: 10px;
gap: 8px;
display: ${(x) => x.step !== 2 ? 'none' : 'flex'};
`

const SCForgot = styled.button`
width:  85px;
height: 37px;
border-radius: 5px;
color: white;
background-color: #FF3030;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content: center;
`

const SCAlmost = styled.button`
width:  85px;
height: 37px;
border-radius: 5px;
color: white;
background-color: #FF922E;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content: center;
`

const SCZap = styled.button`
width:  85px;
height: 37px;
border-radius: 5px;
color: white;
background-color: #2FBE34;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content: center;
`
