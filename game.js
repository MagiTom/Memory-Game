document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [{
            name: 'item1',
            img: './images/item1.jpg'
        },
        {
            name: 'item2',
            img: './images/item2.jpg'
        },
        {
            name: 'item3',
            img: './images/item3.jpg'
        },
        {
            name: 'item4',
            img: './images/item4.jpg'
        },
        {
            name: 'item5',
            img: './images/item5.jpg'
        },
        {
            name: 'item6',
            img: './images/item6.jpg'
        },
        {
            name: 'item7',
            img: './images/item7.jpg'
        },
        {
            name: 'item8',
            img: './images/item8.jpg'
        },
        {
            name: 'item9',
            img: './images/item9.jpg'
        },
        {
            name: 'item10',
            img: './images/item10.jpg'
        },
        {
            name: 'item1',
            img: './images/item1.jpg'
        },
        {
            name: 'item2',
            img: './images/item2.jpg'
        },
        {
            name: 'item3',
            img: './images/item3.jpg'
        },
        {
            name: 'item4',
            img: './images/item4.jpg'
        },
        {
            name: 'item5',
            img: './images/item5.jpg'
        },
        {
            name: 'item6',
            img: './images/item6.jpg'
        },
        {
            name: 'item7',
            img: './images/item7.jpg'
        },
        {
            name: 'item8',
            img: './images/item8.jpg'
        },
        {
            name: 'item9',
            img: './images/item9.jpg'
        },
        {
            name: 'item10',
            img: './images/item10.jpg'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    const cardsWon = [];
    const startTime = new Date().getTime();



    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', './images/cover.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', './images/cover.png');
            cards[optionTwoId].setAttribute('src', '../Images/cover.png');
            return
        } else if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', './images/white.png');
            cards[optionTwoId].setAttribute('src', './images/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', './images/cover.png');
            cards[optionTwoId].setAttribute('src', './images/cover.png');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            const endTime = new Date().getTime();
            const gameSeconds = Math.floor((endTime - startTime) / 1000) % 60;
            const gameMinutes = Math.floor((endTime - startTime) / 1000 / 60) % 60;
            resultDisplay.textContent = `Congratulations! You won! Your time is: ${gameMinutes}: ${gameSeconds}`;
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }
    createBoard();
})