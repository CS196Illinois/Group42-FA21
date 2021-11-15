var maze = [
    [1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,0,1],
    [0,0,0,1,0,1,1,1],
    [1,0,1,1,1,1,0,0],
    [1,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,0,1],
    [1,0,0,1,0,1,0,1],
    [1,1,1,1,1,1,1,1]
]
var playerCords = [0,3]
var monsterCords = [2,6]
var playerDirection = 4 // NWSE is 1234 respectivly
var monster=document.getElementById('monster');
var game=document.getElementById('game');
var character=document.getElementById('character')
var myTimer = setInterval(monsterMove, 10);
var monsterLeft = 0;

function monsterMove(){ 
    monsterLeft += 2;
    monster.style.left = monsterLeft + 'px';
    if(monsterLeft <= 0) {
        monsterLeft += 2
    } 
    if (monsterLeft >= 800) {
        monsterLeft -= 2
    }
    gameOver(monsterCords, playerCords);
}
function gameOver(monsterCords, playerCords) {
    if (monsterCords == playerCords) {
        clearInterval(myTimer)
        alert("Game Over, you lost")
    }
}