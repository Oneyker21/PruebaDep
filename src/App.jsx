import { useState } from "react";
import "./App.css";

function esMultiplo(num1, num2) {
  return num1 % num2 === 0;
}

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleSubmit = () => {
    if (num1 && num2) {
      setResultado(esMultiplo(Number(num1), Number(num2)) ? "Sí, son múltiplos" : "No, no son múltiplos");
    } else {
      setResultado("Por favor, ingresa ambos números.");
    }
  };

  return (
    <>
      <h1>Determina si dos números ingresados son múltiplos entre sí.</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Ingresa el primer número"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Ingresa el segundo número"
      />
      <button onClick={handleSubmit}>Verificar</button>
      <br />
      <label>Respuesta: {resultado}</label>
    </>
  );
}

export default App;
