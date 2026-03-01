import React from "react";
import { useState } from "react";
import TemperatureDisplay from "./components/TemperatureDisplay";
import TemperatureControls from "./components/TemperatureControls";
import HistoryList from "./components/HistoryList";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [temperature, setTemperature] = useState(20);
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("tempHistory");
    return saved ? JSON.parse(saved) : [];
  });
  const [alert, setAlert] = useState("");

  function increaseTemperature() {
    setAlert("");

    setTemperature((prevTemp) => {
      if (prevTemp === 40) {
        setAlert("La temperatura no puede ser mayor a 40°C");
        return prevTemp;
      }
      const nextTemp = prevTemp + 1;
      setHistory((prev) => {
        const nextHistory = [
          ...prev,
          {
            id: uuidv4(),
            time: new Date().toLocaleTimeString(),
            temp: nextTemp,
          },
        ];
        localStorage.setItem("tempHistory", JSON.stringify(nextHistory));
        return nextHistory;
      });
      return nextTemp;
    });
  }

  function decreaseTemperature() {
    setAlert("");

    setTemperature((prevTemp) => {
      if (prevTemp === 0) {
        setAlert("La temperatura no puede ser menor a 0°C");
        return prevTemp;
      }
      const nextTemp = prevTemp - 1;
      setHistory((prev) => {
        const nextHistory = [
          ...prev,
          {
            id: uuidv4(),
            time: new Date().toLocaleTimeString(),
            temp: nextTemp,
          },
        ];
        localStorage.setItem("tempHistory", JSON.stringify(nextHistory));
        return nextHistory;
      });
      return nextTemp;
    });
  }

  function resetTemperature() {
    setTemperature(20);
    setHistory(() => []);
    localStorage.removeItem("tempHistory");
  }

  return (
    <div className="app">
      <h1>Controlador de temperatura</h1>
      <TemperatureDisplay temperature={temperature} />
      {alert && <p className="alert">{alert}</p>}
      <TemperatureControls
        onIncrease={increaseTemperature}
        onDecrease={decreaseTemperature}
        onReset={resetTemperature}
      />
      <HistoryList history={history} />
    </div>
  );
}
