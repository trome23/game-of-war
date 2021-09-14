const newDeckBtn = document.querySelector('#new-deck-btn')
const drawBtn = document.querySelector('#draw-btn')
const cardsContainer = document.querySelector('.cards-container')
let deckId

const newDeck = () => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
        })
}

const handleDraw = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let cardImage = `<img src=${data.cards[0].image}>
                <img src= ${data.cards[1].image}>
                `
            cardsContainer.innerHTML = cardImage
        })
}

newDeckBtn.addEventListener('click', newDeck)
drawBtn.addEventListener('click', handleDraw)





