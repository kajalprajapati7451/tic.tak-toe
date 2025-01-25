console.log("Welcome to Tic Tac Toe");

let music = new Audio("magic-spell-shoot-sound-effect-236816.mp3");
let audioTurn = new Audio("tiktokio-com-vh7obneep33mtcsbfkxn-65462.mp3");
let gameover = new Audio("ding-36029 (1).mp3");
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

// Function to check for a win
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach(e => {
        if (
            (boxText[e[0]].innerText === boxText[e[1]].innerText) &&
            (boxText[e[1]].innerText === boxText[e[2]].innerText) &&
            (boxText[e[0]].innerText !== "")
        ) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won!";
            isgameover = true;
            gameover.play();
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
        }
    });
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxText.innerText === '' && !isgameover) {
            boxText.innerText = turn;
            checkWin();
            if (!isgameover) {
                turn = changeTurn();
                audioTurn.play();
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

// Optional: Play background music manually
document.getElementById('reset').addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element => {
        element.innerText = '';
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
    gameover.pause();
    gameover.currentTime = 0;
});
