import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combination.js";


// original state
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function derivedActivePlayer(gameTurns) {

  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;

};


// manage array of turn data
// everytime a square was selected, we wanna add a new turn to this array.
function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);
  //  const [hasWinner, setHasWinner] = useState(false);
  //  const [activePlayer, setActivePlayer] = useState("X");

  // gameTurns work together because of derived state line: 23 and 8 working together   
  const activePlayer = derivedActivePlayer(gameTurns);

  // Deep copy of the game board as in copy all the inner and outter arrays
  // so we can restart the game
  let gameBoard = [...initialGameBoard.map(array => [...array])];

  // deriving state - refers to state that is derived from props. 
  // if state needs to be updated whenever the props change. 
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }



  // Verify Winner

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    // if all 3 conditions are met, all three squares of this winning combination contain the same symbol. WE HAVE A WINNER!!!
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    // currently active player
    // setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X");

    // updated array 
    setGameTurns(prevTurns => {
      const currentPlayer = derivedActivePlayer(prevTurns);
      //          
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  // update state based on old state so we can have only 1 name of player and not lose the name
  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        // X or O to the new name
        [symbol]: newName
      };
    });
  }

  return <main>
    <div id="game-container">
      <ol id="players">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
        <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />

      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}

      <GameBoard onSelectSqaure={handleSelectSquare}
        board={gameBoard} />
    </div>

    <Log turns={gameTurns} />
  </main >
}

export default App
