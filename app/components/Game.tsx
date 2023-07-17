import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: any) {
    setHistory([...history, nextSquares]);
    setXIsNext(currentMove % 2 === 0);
    setCurrentMove(history.length);
  }

  const jumpTo = (move: any) => {
    setCurrentMove(move);
  };

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  const clickClearBtn = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setXIsNext(true);
  };

  return (
    <div>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
      <div>
        <button onClick={clickClearBtn}>clear button</button>
      </div>
    </div>
  );
}
