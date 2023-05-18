import React from "react";
import { useState } from "react";
import styled from 'styled-components';

export default function Card(props){
    let [step, setStep] = useState(0);
    let [forgotIcon, setForgotIcon] = useState(false);
    let [almostIcon, setAlmostIcon] = useState(false);
    let [zapIcon, setZapIcon] = useState(false);
    
    console.log(step)

    function forgot(){
        setStep(3);
        setForgotIcon(true);

    }

    function almost(){
        setStep(3);
        setAlmostIcon(true);
    }
    
    function zap(){
        setStep(3);
        setZapIcon(true);
    }


    return(
        <CSCard key={props.number} step={step} >
            <CSQuestion step={step} forgotIcon={forgotIcon} almostIcon={almostIcon}>{step === 2? props.answer : step === 1 ? props.question : ('Pergunta ' + props.number) }</CSQuestion>
            <CSRevealQuestion step={step} onClick={()=>{step < 2 ? setStep(step + 1) : ""}} src ={step === 0 ? './assets/seta_play.png' : (step === 1 ? './assets/seta_virar.png' : (step === 3 ? (forgotIcon ? './assets/icone_erro.png' : (almostIcon ? './assets/icone_quase.png' : './assets/icone_certo.png')):''))} ></CSRevealQuestion>
            <CSAnswerBtns step={step}>
                <CSForgot onClick={forgot}>Não lembrei</CSForgot>
                <CSAlmost onClick={almost}>Quase não lembrei</CSAlmost>
                <CSZap onClick={zap}>Zap!</CSZap>
            </CSAnswerBtns>
        </CSCard>
    )
}

const CSCard = styled.span`
width: 300px;
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

const CSQuestion = styled.span`
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

const CSRevealQuestion = styled.img`
width: ${(x) => x.step === 1 ? '30px' : '20px'};
height: ${(x) => x.step === 1 ? '20px' : '23px'};
margin-top: ${(x) => x.step === 1 ? '105px' : '0'};
margin-right: 20px;
display: ${(x) => x.step !== 2 ? 'flex' : 'none'};


`

const CSAnswerBtns = styled.span`
width: 100%;
height: 37px;
display: flex;
margin-bottom: 10px;
gap: 8px;
display: ${(x) => x.step !== 2 ? 'none' : 'flex'};
`

const CSForgot = styled.button`
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

const CSAlmost = styled.button`
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

const CSZap = styled.button`
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
