let startTime;
function timer() {
    timerElement.innerText = 0;
    startTime = new Date();
    setInterval(() => {
        getTimerTime();
    }, 1000)
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000);
}

renderNewQuote()
var monster=document.getElementById('monster');
var game=game.getElementById('game');

var monsterLeft = 0;

function monsterMove(e){

    if(e.keyCode==39){
        monsterLeft += 2;
        monster.style.left = monsterLeft + 'px';

    }
    if(e.keycode==37){
        monsterLeft -= 2;
        monster.style.left = monsterLeft + 'px';
        if(monsterLeft <= 0){
            monsterLeft += 2;
        }
    }

}

setTimeout(monsterMove, 5000);