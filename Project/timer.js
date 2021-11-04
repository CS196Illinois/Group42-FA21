let startTime
function timer() {
    timerElement.innerText = 0
    startTime = new Date()
    setInterval(() => {
        getTimerTime()
    }, 1000)
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}

renderNewQuote()