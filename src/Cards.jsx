import React from 'react'
import { useState } from 'react'
import Card from './Card'
import styled from 'styled-components';
const cards = [
	{ number: 1, question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ number: 2, question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ number: 3, question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ number: 4, question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ number: 5, question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ number: 6, question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ number: 7, question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ number: 8, question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

export default function Cards(props){
    
    return(
        <SCCardsContainer active = {props.active}>
            {cards.map(x => Card(x, props, cards.length))}
        </SCCardsContainer>
    )
}


const SCCardsContainer = styled.div`
    width: auto;
    min-height: 500px;
    padding-bottom: 20px;
    display: ${(props) => props.active ? 'none' : 'flex' } ;
    flex-direction: column;
    align-items: center;
`;