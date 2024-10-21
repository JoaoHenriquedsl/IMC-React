import React from "react";
import "./ImcResult.css";
import Button from "./Button";

function ImcResult({ setResultBolean, imc, situation }) {
  const handleBack = () => {
    setResultBolean(false);
  };

  return (
    <div id="result-container">
      <div id="result">
        <h1>Seu IMC: {imc.toFixed(2)}</h1>
        <h2>Situação atual: {situation}</h2>
        <Button id="back" value={"Voltar"} action={handleBack} />
      </div>
    </div>
  );
}

export default ImcResult;
