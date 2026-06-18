let cells = document.querySelectorAll(".cell");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#userScore");
let compScorePara = document.querySelector("#compScore");

let userScore = 0;
let compScore = 0;
let gameOver = false;

function resetBoard() {
    cells.forEach((cell) => {
        cell.innerText = "";
    });
    msg.innerText = "";
    gameOver = false;
}

function gameWinner() {

    const winPatterns = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    for (let pattern of winPatterns) {

        let pos1 = cells[pattern[0]].innerText;
        let pos2 = cells[pattern[1]].innerText;
        let pos3 = cells[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {

            if (pos1 === "X") {
                msg.innerText = "You Won!";
                userScore++;
                userScorePara.innerText = userScore;
            } 
            else {
                msg.innerText = "Computer Won!";
                compScore++;
                compScorePara.innerText = compScore;
            }

            gameOver = true;
            setTimeout(resetBoard, 3000);
            return;
        }
    }

    let filled = true;

    cells.forEach((cell) => {
        if (cell.innerText === "") {
            filled = false;
        }
    });

    if (filled) {
        msg.innerText = "It's a Draw!";
        gameOver = true;
        setTimeout(resetBoard, 3000);
    }
}

function computerMove() {

    if (gameOver) return;

    let emptyCells = [];

    cells.forEach((cell, index) => {
        if (cell.innerText === "") {
            emptyCells.push(index);
        }
    });

    if (emptyCells.length === 0) return;

    let randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];

    cells[randomIndex].innerText = "O";
    cells[randomIndex].style.color = "blue";
}

cells.forEach((cell) => {

    cell.addEventListener("click", () => {

        if (cell.innerText === "" && !gameOver) {

            cell.innerText = "X";
            cell.style.color = "red";

            gameWinner();

            if (!gameOver) {
                computerMove();
                gameWinner();
            }
        }

    });

});