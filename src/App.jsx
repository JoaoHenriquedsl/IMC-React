import { useState } from "react";
import "./App.css";
import ImcCalc from "./components/ImcCalc";
import ImcResult from "./components/ImcResult";

function App() {
  const [resultBolean, setResultBolean] = useState(false);
  const [imc, setImc] = useState();
  const [situation, setSituation] = useState();

  return (
    <div id="container">
      {resultBolean ? <ImcResult setResultBolean={setResultBolean} imc={imc} situation={situation} /> : <></>}
      <ImcCalc setResultBolean={setResultBolean} setImc={setImc} setSituation={setSituation} />
    </div>
  );
}

export default App;
