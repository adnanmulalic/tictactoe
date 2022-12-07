const board = document.querySelector("#board");
const boardTiles = document.querySelectorAll(".boardTile");
const restartButton = document.querySelector("#restartButton");
const playerOneInput = document.querySelector("#playerOne");
const playerTwoInput = document.querySelector("#playerTwo");
const playerInputs = document.querySelectorAll("div > input");
const winnerMessage = document.querySelector("#winnerMessage");

let playerOne = ""
let playerTwo = ""
let i = 0;

const players = (name, moves) => {
    return {name, moves: []};
};

const gameBoard = (() => {
    const gameBoardArray = [];
    const displayMoves = () => {
        for (let i = 0; i < gameBoardArray.length; i++) {  // loop through gameboard
            let currentMove = gameBoardArray[i];  // assing current move
            for (let j = 0; j < boardTiles.length; j++) {  // loop through boardtiles
                if (gameBoardArray[i] === boardTiles[j].id) { // first I compare move from array with boardtile number, so that the proper tile gets changed
                    if (gameBoardArray.indexOf(currentMove) % 2 === 0) { // check if it is x or o move with the help of indexOf (x always starts first)
                        boardTiles[j].innerHTML = "X";  // mark the tile with X 
                    } else {
                        boardTiles[j].innerHTML = "O"; // mark the tile with O
                    }
                }
            }
        }
    }
    return {
        gameBoardArray,
        displayMoves,
    };
})();

let currentSelection = "";
const winningMoves = ["123", "456", "789", "147", "258", "369", "159", "357"];
const calculateMoves = (() => {
    winningMoves.forEach((winningMove) => {
        for (let i = 0; i < playerOne.moves.length; i++) {
            if (winningMove[i] === playerOne.moves.sort().toString().replaceAll(",","")[i] && currentSelection.length < 3) {
                currentSelection += winningMove[i];
                console.log(currentSelection.split("").sort().toString());
            } 
            if (currentSelection.length === 3) {
                console.log("win") // moar needed
            }
        }
    });
});

playerOne = players(playerOneInput.value); // create player object with name and empty array for moves
playerTwo = players(playerTwoInput.value);

playerInputs.forEach(playerInput => {
    playerInput.addEventListener("keyup", () => {
        gameBoard.gameBoardArray.length = 0; // if user changes player names, reset board and empty gameBoardArray
        boardTiles.forEach(boardTile => {
            boardTile.innerHTML = "";
            winnerMessage.innerHTML = "";
        })
    })
});


restartButton.addEventListener("click", () => {
    gameBoard.gameBoardArray.length = 0;
    boardTiles.forEach(boardTile => {
        boardTile.innerHTML = "";
        winnerMessage.innerHTML = "";
    })
    playerOne = players(playerOneInput.value); // create player object with name and empty array for moves
    playerTwo = players(playerTwoInput.value);
});

boardTiles.forEach(boardTile => {
    boardTile.addEventListener("click", () => { // event listener to track on which tile user clicks
        if (boardTile.innerHTML === "" && gameBoard.gameBoardArray.length <= 9) { // if tile is not empty and gameboard array isnt full of moves (9)
            gameBoard.gameBoardArray.push(boardTile.id); // push the tile that user clicked into gameBoardArray
            gameBoard.displayMoves(); // call displayMove function from gameBoard module
            if (boardTile.innerHTML === "X") {
                playerOne.moves.push(boardTile.id);
                for (let i = 0; i < winningMoves.length; i++) {
                    let playerOneM = playerOne.moves.sort().toString().replaceAll(",","");
                    if (playerOneM.length === 3 && winningMoves[i] === playerOneM) {
                        console.log("Player X wins"); // do stuf here
                        winnerMessage.innerHTML = "Player X wins";
                    } else if(playerOneM.length > 3 && winningMoves[i] === playerOneM.slice(0,3) || winningMoves[i] === playerOneM.slice(1,4) || winningMoves[i] === playerOneM.slice(2,5)) { // this is too long
                        console.log("Player X wins");
                        winnerMessage.innerHTML = "Player X wins";
                    } 
                } 
            } else if(boardTile.innerHTML === "O"){
                playerTwo.moves.push(boardTile.id);
                for (let i = 0; i < winningMoves.length; i++) {
                    let playerTwoM = playerTwo.moves.sort().toString().replaceAll(",","");
                    if (winningMoves[i] === playerTwoM) {
                        console.log("Player O wins");
                        winnerMessage.innerHTML = "Player O wins";
                    } else if(playerTwoM.length > 3 && winningMoves[i] === playerTwoM.slice(0,3) || winningMoves[i] === playerTwoM.slice(1,4)) {
                        console.log("Player O wins");
                        winnerMessage.innerHTML = "Player O wins";
                    }
                }
            }

            if (gameBoard.gameBoardArray.length === 9 && winnerMessage.innerHTML === "") {
                console.log("Its a tie!");
            }
        }
    })
});


