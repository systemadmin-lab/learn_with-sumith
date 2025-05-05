import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);
  function handleClicked() {
   setValue('x')
  }
  return (
    <>
      <button
        onClick={handleClicked}
        className="bg-white border border-gray-400 h-12 w-12 m-1"
      >
        {value}
      </button>
    </>
  );
}

function App() {
  const [squares,setSquares]=useState(Array(9).fill(null))
  return (
    <>
      <div className="flex">
        <Square value={squares[0]}/>

        <Square value={squares[1]} />
        <Square value={squares[2]}/>
      </div>
      <div className="flex">
        <Square value={squares[3]} />
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
      </div>
      <div className="flex">
        <Square value={square[6]}/>
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
      </div>
    </>
  );
}

export default App;
