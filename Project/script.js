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
var playerCords = [3,0]
var monsterCords = [2,6]
var playerDirection = 4 // NWSE is 1234 respectivly
var monster=document.getElementById('monster');
var game=document.getElementById('game');
var character=document.getElementById('character')


function gameOver(monsterCords, playerCords) {
    if (monsterCords == playerCords) {
        clearInterval(myTimer)
        alert("Game Over, you lost")
    }
}