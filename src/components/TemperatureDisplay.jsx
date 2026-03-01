import React from "react";
export default function TemperatureDisplay({ temperature, setColor }) {
  let message = "";
  let color = "";
  if (temperature < 15) {
    message = "Hace frío";
    color = "blue";
  } else if (temperature > 25) {
    message = "Hace calor";
    color = "red";
  } else {
    message = "La temperatura es agradable";
    color = "green";
  }

  return (
    <>
      <p>Temperatura: {temperature}°C</p>
      <p style={{ color: color }}>{message}</p>
    </>
  );
}
