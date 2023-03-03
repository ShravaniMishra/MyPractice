import { useState } from "react";
import "./App.css";

function App() {
  const color = "peru";
  const [bg, setBg] = useState(color);
  const [text, setText] = useState("Click Me");

  const handleClick = () => {
    let colo = "teal";
    setBg(colo);
    setText("Oouch !! 😃");
  };

  const doubleClick = () => {
    setBg(color);
    setText("Ufff 🎆 yeh kya hai");
  };
  //
  return (
    <>
      <div
        className="App"
        style={{ backgroundColor: bg, margin: "auto", height: "100%" }}
      >
        <button onClick={handleClick} onDoubleClick={doubleClick}>
          {text}
        </button>
      </div>
    </>
  );
}

export default App;
