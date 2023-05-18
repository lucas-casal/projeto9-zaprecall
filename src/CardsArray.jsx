import React from "react"

const Card1 = {
    number: 1,
    Q: "O que é JSX?", 
    R: "Uma extensão de linguagem do JavaScript",
}

const Card2 = {
    number: 2,
    Q: "O React é __",
    R: "uma biblioteca JavaScript para construção de interfaces"
}

const Card3 = {
    number: 3,
    Q: "Componentes devem iniciar com __",
    R: "letra maiúscula"
}

const Card4 = {
    number: 4,
    Q: "Podemos colocar __ dentro do JSX",
    R: "expressões"
}

const Card5 = {
    number: 5,
    Q: "O ReactDOM nos ajuda __",
    R: "interagindo com a DOM para colocar componentes React na mesma"
}

const Card6 = {
    number: 6,
    Q: "Usamos o npm para __",
    R: "gerenciar os pacotes necessários e suas dependências"
}

const Card7 = {
    number: 7, 
    Q: "Usamos props para __", 
    R: "passar diferentes informações para componentes" 
}

const Card8 = {
    number: 8,
    Q: "Usamos estado (state) para __",
    R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
}

const CardsArray = [Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8]

export default CardsArray;