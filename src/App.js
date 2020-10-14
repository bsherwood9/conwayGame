import React, {useState} from 'react';
import Cell from './components/Cell'
import './App.css';

function CreateAGrid(rows, cols) {
  let grid = [];
  for (let i = 0; i < rows; i++) {
    grid[i] = Array(rows);
    for (let j = 0; j < cols; j++) {
      grid[i][j] = <Cell />;
    }
  }
  return grid;
}

function App() {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);
  const firstGrid = CreateAGrid(rows, cols);
  const nextGrid = CreateAGrid(rows, cols)
  return (
    <div className="App">
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 50px)"
        }}
      >
        {firstGrid.map((item) => (
          <div key={Math.random().toString(36).substring(7)}>{item}</div>
        ))}
      </div>
      <button>Start</button>
    </div>
  );
}

// Any live cell with two or three live neighbours survives.
// Any dead cell with three live neighbours becomes a live cell.
// All other live cells die in the next generation.
// Similarly, all other dead cells stay dead.


export default App;
