function Square() {
  return (
    <>
      <button className="bg-white border border-gray-400 h-12 w-12 m-1">
        X
      </button>
    </>
  );
}

function App() {
  return (
    <>
      <div>
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div>
        <button className="bg-white border border-gray-400 h-12 w-12 m-1">
          X
        </button>
        <button className="bg-white border border-gray-400 h-12 w-12 m-1">
          X
        </button>
        <button className="bg-white border border-gray-400 h-12 w-12 m-1">
          X
        </button>
      </div>
      <div>
        <button className="bg-white border border-gray-400 h-12 w-12 m-1">
          X
        </button>
        <button className="bg-white border border-gray-400 h-12 w-12 m-1">
          X
        </button>
        <button className="bg-white border border-gray-400 h-12 w-12 m-1">
          X
        </button>
      </div>
    </>
  );
}

export default App;
