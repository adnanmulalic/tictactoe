const board = document.querySelector("#board");
const boardTiles = document.querySelectorAll(".boardTile");
const restartButton = document.querySelector("#restartButton");

const gameBoard = (() => {
    const gameBoardArray = [];
    const displayMoves = () => {
        for (let i = 0; i < gameBoardArray.length; i++) {  // loop through gameboard
            let currentMove = gameBoardArray[i];  // assing current move
            for (let j = 0; j < boardTiles.length; j++) {  // loop through boardtiles
                if (gameBoardArray[i] === boardTiles[j].id) { // first I compare move from array with boardtile number, so that the proper tile get changed
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
        }
    })
});


const Players = (name) => {

}

