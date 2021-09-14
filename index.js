const newDeckBtn = document.querySelector('#new-deck-btn')
const drawBtn = document.querySelector('#draw-btn')
const cards = document.querySelector('.cards')

let deckId

//function to get a new deck from 'deckofcards' API
const newDeck = () => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
        })
}

//function to draw 2 cards from 'deckofcards' API
const drawCard = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            //using template strings to create image element and insert drawn cards into respective outlines//
            cards.children[0].innerHTML = `
                <img class="card-image" src=${data.cards[0].image}>  
            `   
            cards.children[1].innerHTML = `
                <img class="card-image" src=${data.cards[1].image}>
            `   
        })
        whoWins()
}

//function to determine which player has the higher card//
const whoWins = (card1, card2) => {
    const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", 
        "10", "JACK", "QUEEN", "KING", "ACE"]

    const card1Value = cardValues.indexOf(card1.value)
    const card2Value = cardValues.indexOf(card2.value)
    
    if(card1Value > card2Value) {
        console.log("Player 1 wins");
    } else if (card2Value > card1Value) {
        console.log("Player 2 wins");
    } else {
        console.log("It's a tie!");
    }
}

//Event listeners for draw and shuffle buttons
newDeckBtn.addEventListener('click', newDeck)
drawBtn.addEventListener('click', drawCard)



