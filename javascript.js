const board = document.querySelector("#board");
const boardTiles = document.querySelectorAll(".boardTile");

const gameBoard = (() => {
    const gameBoardArray = [];
    const displayMoves = () => {
        for (let i = 0; i < gameBoardArray.length; i++) {
            for (let j = 0; j < boardTiles.length; j++) {
                if (gameBoardArray[i] === boardTiles[j].id) {
                    boardTiles[j].innerHTML = "X";
                    console.log("Found a match");
                }
            }
        }
    }
    return {
        gameBoardArray,
        displayMoves,
    };
})();


boardTiles.forEach(boardTile => {
    boardTile.addEventListener("click", () => {
        gameBoard.gameBoardArray.push(boardTile.id);
    })
});


const Players = (name) => {

}

