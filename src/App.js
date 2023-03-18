import { useState } from "react";
import Cell from "./components/Cell";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");

  console.log(cells);

  return (
    <div className="app">
      <div className="cells">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            go={go}
          />
        ))}
      </div>
      <p>Now it's {go}'s turn</p>
    </div>
  );
}

export default App;
