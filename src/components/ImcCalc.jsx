import React, { useState } from "react";
import "./ImcCalc.css";
import Button from "./Button";
import data from "../data/data.js";

function imcCalc({ setResultBolean, setImc, setSituation }) {
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();

  const handleLimpar = (e) => {
    e.preventDefault();
    setAltura("");
    setPeso("");
  };

  const validDigits = (digit) => {
    return digit.replace(/[^0-9.]/g, "");
  };

  const handleAlturaInput = (e) => {
    const altura = validDigits(e.target.value);
    Number(altura);
    setAltura(altura);
  };

  const handlePesoInput = (e) => {
    const peso = validDigits(e.target.value);
    Number(peso);
    setPeso(peso);
  };

  const handleCalc = (e) => {
    e.preventDefault();

    const imc = peso / (altura * altura);
    const situationObject = data.filter((data) => imc > data.min && imc < data.max);

    if (situationObject.length !== 0) {
      setResultBolean(true);
      const situation = situationObject[0].info;
      setSituation(situation);
      setImc(imc);
    }
  };

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div id="form-inputs">
          <label>
            <p>Altura:</p>
            <input
              type="text"
              name="altura"
              id="altura"
              placeholder="Exemplo: 1.75 (Metros)"
              onChange={(e) => handleAlturaInput(e)}
              value={altura || ""}
            />
          </label>
          <label>
            <p>Peso:</p>
            <input
              type="text"
              name="peso"
              id="peso"
              placeholder="Exemplo: 70.5 (Quilos)"
              onChange={(e) => handlePesoInput(e)}
              value={peso || ""}
            />
          </label>
        </div>

        <div id="form-buttons">
          <Button id={"calcular"} value={"CALCULAR"} action={handleCalc} />
          <Button id={"limpar"} value={"LIMPAR"} action={handleLimpar} />
        </div>
      </form>
    </div>
  );
}

export default imcCalc;
