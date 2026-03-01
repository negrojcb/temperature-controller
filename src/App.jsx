import React from "react";
import { useState } from "react";
import TemperatureDisplay from "./components/TemperatureDisplay";
import TemperatureControls from "./components/TemperatureControls";
import HistoryList from "./components/HistoryList";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [temperature, setTemperature] = useState(20);
  const [history, setHistory] = useState([]);

  function increaseTemperature() {
    if (temperature === 40) {
      alert("La temperatura no puede ser mayor a 40°C");
      return;
    }
    setTemperature((prevTemp) => {
      const nextTemp = prevTemp + 1;
      setHistory((prev) => [
        ...prev,
        {
          id: uuidv4(),
          time: new Date().toLocaleTimeString(),
          temp: nextTemp,
        },
      ]);
      return nextTemp;
    });
  }

  function decreaseTemperature() {
    if (temperature === 0) {
      alert("La temperatura no puede ser menor a 0°C");
      return;
    }
    setTemperature((prevTemp) => {
      const nextTemp = prevTemp - 1;
      setHistory((prev) => [
        ...prev,
        {
          id: uuidv4(),
          time: new Date().toLocaleTimeString(),
          temp: nextTemp,
        },
      ]);
      return nextTemp;
    });
  }

  function resetTemperature() {
    setTemperature(20);
    setHistory(() => []);
  }

  return (
    <div className="app">
      <h1>Controlador de temperatura</h1>
      <TemperatureDisplay temperature={temperature} />
      <TemperatureControls
        onIncrease={increaseTemperature}
        onDecrease={decreaseTemperature}
        onReset={resetTemperature}
      />
      <HistoryList history={history} />
    </div>
  );
}
