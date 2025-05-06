import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <>
      <button
        onClick={onSquareClick}
        className="bg-white border border-gray-400 h-12 w-12 m-1"
      >
        {value}
      </button>
    </>
  );
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  //for making decssion which will be priint x||0
  const [xIsNext, setIsNext] = useState(true);
  //lets chheck the winner here
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner is - ${winner}`;
  } else {
    status = "moves for " + (xIsNext ? "X" : "O");
  }

  //we will send this button as  props to our child component
  function handleClicked(index) {
    const nextSquare = squares.slice();
    if (squares[index]) {
      return;
    } else {
      if (xIsNext) {
        nextSquare[index] = "x";
      } else {
        nextSquare[index] = "o";
      }
    }
    setSquares(nextSquare);
    setIsNext(!xIsNext);
  }
  return (
    <>
      <div className="text-xl text-black font-extrabold">
        <h1>{status}</h1>
      </div>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClicked(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClicked(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClicked(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClicked(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClicked(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClicked(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClicked(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClicked(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClicked(8)} />
      </div>
    </>
  );
}
// hhere we ar writing a function for checking winner
function calculateWinner(squares) {
  //mark up cordinates
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    //logics for checking winner
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    } 
  }
  
    return null;
  
}
export default App;
