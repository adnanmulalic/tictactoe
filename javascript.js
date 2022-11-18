const board = document.querySelector("#board");
const boardTiles = document.querySelectorAll(".boardTile");
const restartButton = document.querySelector("#restartButton");
const playerOneInput = document.querySelector("#playerOne");
const playerTwoInput = document.querySelector("#playerTwo");
const playerInputs = document.querySelectorAll("div > input");

let playerOne = "";
let playerTwo = "";
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

const winningMoves = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
const calculateMoves = (() => {
    winningMoves.forEach(winningMove => {
        for (let i = 0; i < winningMove.length; i++) {
            if (winningMove === playerOne.moves.slice(0,3) || winningMove[i] === playerTwo.moves[i]) {
                console.log("win", winningMove) // use sort tomorrow and delete this
            }
            
        }
    });
});

playerInputs.forEach(playerInput => {
    playerInput.addEventListener("keyup", () => {
        gameBoard.gameBoardArray.length = 0; // if user changes player names, reset board and empty gameBoardArray
        boardTiles.forEach(boardTile => {
            boardTile.innerHTML = "";
        })
        playerOne = players(playerOneInput.value); // create player object with name and empty array for moves
        playerTwo = players(playerTwoInput.value);
    })
});


restartButton.addEventListener("click", () => {
    gameBoard.gameBoardArray.length = 0;
    boardTiles.forEach(boardTile => {
        boardTile.innerHTML = "";
    })
})

boardTiles.forEach(boardTile => {
    boardTile.addEventListener("click", () => { // event listener to track on which tile user clicks
        if (boardTile.innerHTML === "" && gameBoard.gameBoardArray.length < 9) { // if tile is not empty and gameboard array isnt full of moves (9)
            gameBoard.gameBoardArray.push(boardTile.id); // push the tile that user clicked into gameBoardArray
            gameBoard.displayMoves(); // call displayMove function from gameBoard module
            if (boardTile.innerHTML === "X") {
                playerOne.moves.push(boardTile.id); 
            } else {
                playerTwo.moves.push(boardTile.id); 
            }
            calculateMoves();
        }
    })
});


