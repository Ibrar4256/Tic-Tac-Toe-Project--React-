import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";
import { useState } from "react";

const intialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
];

function derivedActivePlayer(gameTurns)
{
  let currentPlayer = 'X';

      if(gameTurns.length > 0 && gameTurns[0].player === 'X')
      {
        currentPlayer = "O";                                 
      }

      return currentPlayer;
}

function App() {
  const[gameTurns, setGameTurns] = useState([]);
  // const[activePlayer, setActivePlayer] = useState('X');

  const activePlayer = derivedActivePlayer(gameTurns);

  
  const gameboard = [...intialGameBoard.map(array => [...array])];
  let winner ;

  for(const turn of gameTurns)
  {
    const { square, player } = turn;
    const { row, col } = square;

    gameboard[row][col] = player;
  }

  for(const combination of WINNING_COMBINATIONS)
  {
    const firstSquareSymbol = gameboard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameboard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameboard[combination[2].row][combination[2].column]
  
  if (
    firstSquareSymbol &&
    firstSquareSymbol === secondSquareSymbol &&
    firstSquareSymbol === thirdSquareSymbol
  ) {
    winner = firstSquareSymbol;
  }
}

const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowindex, colindex)
  {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X' ));
    setGameTurns((prevTurns) => {
      
      const currentPlayer = derivedActivePlayer(prevTurns);
      const updatedTurns = [
        { square: {row: rowindex, col: colindex} , player: currentPlayer},
        ...prevTurns,
      ];
      return updatedTurns;
    })
  }
  function handleRematch()
  {
    setGameTurns([]);
  }

  return (
    <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player
          InitialName="player 1"
          symbol="X"
          isActive={activePlayer === "X"}
        />
        <Player
          InitialName="player 2"
          symbol="O"
          isActive={activePlayer === "O"}
        />
      </ol>
      {(winner || hasDraw) && <GameOver
      winner = {winner}
      onRestart = {handleRematch}/>}
      <GameBoard
        onSelectSquare={handleSelectSquare}
        board = {gameboard}
      />
    </div>
    <Log
    turns = {gameTurns}/>
    </main>
    
  );
}

export default App
