const newDeckBtn = document.querySelector('#new-deck-btn')
const drawBtn = document.querySelector('#draw-btn')
const cards = document.querySelector('.cards')
const winnerTitle = document.querySelector('#winner-title')
const remainingHeader = document.querySelector("#remaining-header")
let deckId

//function to GET a new deck from 'deckofcards' API with same id #
const newDeck = () => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
        })
}

//function using fetch to draw 2 cards from 'deckofcards' API
const drawCard = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)  //<== using template strings for GET to add deckId of new deck
        .then(res => res.json())
        .then(data => {
            remainingHeader.textContent = `Remaining Cards: ${data.remaining}`;
            //using template strings to create image element and insert drawn cards into respective outlines//
            cards.children[0].innerHTML = `
                <img class="card-image" src=${data.cards[0].image}>  
            `   
            cards.children[1].innerHTML = `
                <img class="card-image" src=${data.cards[1].image}>
            `
            let winnerText = whoWins(data.cards[0], data.cards[1])   
            winnerTitle.textContent = winnerText
        })
}

//function to determine which player has the higher card//
const whoWins = (card1, card2) => {
    const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]

    const card1Value = cardValues.indexOf(card1.value) //<== getting card values based on index in array
    const card2Value = cardValues.indexOf(card2.value)
    //simple if/else statement to determine winner
    if (card1Value > card2Value) {
        return "Computer WINS 😭";
    } else if (card2Value > card1Value) {
        return "You WIN! 🏆";
    } else {
        return "It's WAR! ⚔️";
    }
}

//Event listeners for draw and shuffle buttons
newDeckBtn.addEventListener('click', newDeck)
drawBtn.addEventListener('click', drawCard)

// let card1Obj = {
//     value: "JACK"
// }
// let card2Obj = {
//     value: "3"
// }

// whoWins(card1Obj, card2Obj)

