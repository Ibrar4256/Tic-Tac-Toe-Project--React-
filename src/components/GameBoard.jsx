import { useState } from "react";


export default function GameBoard({onSelectSquare,board})
{


    // const [gameboard,setGameBoard] = useState(intialGameBoard);

    // function handleSquareChange(rowindex,colindex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updateGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updateGameBoard[rowindex][colindex] = activePlayerSymbol;
    //         return updateGameBoard;
    //     });
      
    //     onSelectSquare();
    // }

    return (
      <ol id="game-board">
        {board.map((row, rowindex) => (
          <li key={rowindex}>
            <ol>
              {row.map((PlayerSymbol, colindex) => (
                <li key={colindex}>
                  <button onClick={() => onSelectSquare(rowindex,colindex)} disabled={PlayerSymbol !== null}>{PlayerSymbol}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    );
}
