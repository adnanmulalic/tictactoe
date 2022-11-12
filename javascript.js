const board = document.querySelector("#board");
const boardTiles = document.querySelectorAll(".boardTile");

const gameBoard = (() => {
    const gameBoardArray = ["2", "8"];
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



const Players = (name) => {

}

