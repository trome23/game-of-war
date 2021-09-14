const newDeckBtn = document.querySelector('#new-deck-btn')
const drawBtn = document.querySelector('#draw-btn')
const cards = document.querySelector('.cards')

let deckId

const newDeck = () => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
        })
}

const drawCard = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            cards.children[0].innerHTML = `
                <img class="card-image" src=${data.cards[0].image}>
            `   
            cards.children[1].innerHTML = `
                <img class="card-image" src=${data.cards[1].image}>
            `   
        })
}

newDeckBtn.addEventListener('click', newDeck)
drawBtn.addEventListener('click', drawCard)





