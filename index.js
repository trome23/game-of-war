const newDeckBtn = document.querySelector('#new-deck-btn')

const handleClick = () => {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/?deck_count=1')
        .then(res => res.json())
        .then(data => console.log(data))
}

newDeckBtn.addEventListener('click', handleClick)


