import { useState } from "react";
export default function App() {
  const [number, setNumber] = useState(0);

  function decrementar() {
    setNumber(number - 1);
  }

  function incrementar() {
    setNumber(number + 1);
  }

  function reiniciar() {
    setNumber(0);
  }
  return (
    <div id="counter-container">
      <h1 className="counter-title"> Counter </h1>
      <p id="counter-result">{number}</p>
      <div className="buttons">
        <button id="decrementar" onClick={decrementar}>
          <span class="material-symbols-outlined">remove</span>
        </button>
        <button id="incrementar" onClick={incrementar}>
          <span class="material-symbols-outlined">add</span>
        </button>
        <button id="reiniciar" onClick={reiniciar}>
          <span class="material-symbols-outlined">restart_alt</span>
        </button>
      </div>
    </div>
  );
}
