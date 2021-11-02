const API_URL = "https://random-word-api.herokuapp.com/word?number=10"
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')

var wordQueue = []
var queueCounter = 0;

function getRandomWord() {
    return fetch(API_URL)
  .then(response => response.json())
}

async function getNewWord() {
    var quote
    console.log(queueCounter)
    if (queueCounter >= (wordQueue.length - 3)) {
        wordQueue = await getRandomWord()
        queueCounter = 0
        quote = wordQueue[queueCounter]
        queueCounter++
    } else {
        quote = wordQueue[queueCounter]
        queueCounter++
    }
    quoteDisplayElement.innerHTML = ''
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    });
    quoteInputElement.value = null
}

quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')

    var correct = true

    arrayQuote.forEach((characterSpan, index) => {
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
    if (correct) getNewWord()
})

getNewWord()