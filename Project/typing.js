const API_URL = "https://random-word-api.herokuapp.com/word?number=20"
const quoteDisplayElementN = document.getElementById('quoteDisplayN')
const quoteDisplayElementW = document.getElementById('quoteDisplayW')
const quoteDisplayElementS = document.getElementById('quoteDisplayS')
const quoteDisplayElementE = document.getElementById('quoteDisplayE')
const quoteInputElement = document.getElementById('quoteInput')

var wordQueue = []
var queueCounter = 0;

function getRandomWord() {
    return fetch(API_URL)
  .then(response => response.json())
}

function checkGameConditons() {}

function updateMap(direction){
    var changed = false
    var temp = playerCords
    if (direction == 1) {
        if ((playerCords[0] - 1) >= 0 && maze[playerCords[0] - 1][playerCords[1]] == 0) {
            playerCords = [playerCords[0] - 1, playerCords[1]]
            changed = true
        }
    } else if (direction == 2) {
        if ((playerCords[1] - 1) >= 0 && maze[playerCords[0]][playerCords[1] - 1] == 0) {
            playerCords = [playerCords[0], playerCords[1] - 1]
            changed = true
        }
    } else if (direction == 3) {
        if ((playerCords[0] + 1) >= 0 && maze[playerCords[0] + 1][playerCords[1]] == 0) {
            playerCords = [playerCords[0] + 1, playerCords[1]]
            changed = true
        }
    } else if (direction == 4) {
        if ((playerCords[1] + 1) >= 0 && maze[playerCords[0]][playerCords[1] + 1] == 0) {
            playerCords = [playerCords[0], playerCords[1] + 1]
            changed = true
        }
    }
    if (changed) {
        maze[playerCords[0]][playerCords[1]] = 2
        maze[temp[0]][temp[1]] = 0
    }
    return changed
}

function printMap() {
    console.table(maze)
}

async function getNewWord() {
    printMap()
    var quoteN
    var quoteW
    var quoteS
    var quoteE
    if (queueCounter >= (wordQueue.length - 8)) {
        wordQueue = await getRandomWord()
        queueCounter = 0
    }    
    quoteN = wordQueue[queueCounter]
    queueCounter++
    quoteW = wordQueue[queueCounter]
    queueCounter++
    quoteS = wordQueue[queueCounter]
    queueCounter++
    quoteE = wordQueue[queueCounter]
    queueCounter++
    quoteDisplayElementN.innerHTML = ''
    quoteDisplayElementW.innerHTML = ''
    quoteDisplayElementS.innerHTML = ''
    quoteDisplayElementE.innerHTML = ''
    quoteN.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElementN.appendChild(characterSpan)
    });
    quoteW.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElementW.appendChild(characterSpan)
    });
    quoteS.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElementS.appendChild(characterSpan)
    });
    quoteE.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElementE.appendChild(characterSpan)
    });
    quoteInputElement.value = null
}

quoteInputElement.addEventListener('input', () => {
    const arrayQuoteN = quoteDisplayElementN.querySelectorAll('span')
    const arrayQuoteW = quoteDisplayElementW.querySelectorAll('span')
    const arrayQuoteS = quoteDisplayElementS.querySelectorAll('span')
    const arrayQuoteE = quoteDisplayElementE.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')

    var correct = true
    arrayQuoteN.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else {
            characterSpan.classList.add('incorrect')
            characterSpan.classList.remove('correct')
            correct = false
        }
    })
    if (correct) {
        updateMap(1)
        getNewWord()
    }
    var correct = true
    arrayQuoteW.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else {
            characterSpan.classList.add('incorrect')
            characterSpan.classList.remove('correct')
            correct = false
        }
    })
    if (correct) {
        updateMap(2)
        getNewWord()
    }
    var correct = true
    arrayQuoteS.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else {
            characterSpan.classList.add('incorrect')
            characterSpan.classList.remove('correct')
            correct = false
        }
    })
    if (correct) {
        updateMap(3)
        getNewWord()
    }
    var correct = true
    arrayQuoteE.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else {
            characterSpan.classList.add('incorrect')
            characterSpan.classList.remove('correct')
            correct = false
        }
    })
    if (correct) {
        updateMap(4)
        getNewWord()
    }
})

updateMap(2)
getNewWord()