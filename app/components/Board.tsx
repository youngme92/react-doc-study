import { useState } from "react";
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }: any) {
  // const [XisNext, setXisNext] = useState(true);
  // const [square, setSquare] = useState(Array.from({ length: 9 }, () => null));

  const winner = calculateWinner(squares);
  let status = null;
  if (winner) {
    status = `winner is ${winner}`;
  } else {
    status = `Next is ${xIsNext ? "X" : "O"}`;
  }

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares: any = [...squares];
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
    // setSquare(nextSquares);
    // setXisNext(!XisNext);
  }
  function calculateWinner(square: any) {
    const line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const item of line) {
      const [a, b, c] = item;
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }
  return (
    <div className="table-auto">
      {status}
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
