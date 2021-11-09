var monster=document.getElementById('monster');
var game=document.getElementById('game');

var monsterLeft = 0;

setInterval(function(){ 
    monsterLeft += 2;
    monster.style.left = monsterLeft + 'px';
    if(monsterLeft <= 0) {
        monsterLeft += 2
    } 
    if (monsterLeft >= 800) {
        monsterLeft -= 2
    }
}, 10);