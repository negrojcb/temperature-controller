import React from "react";

export default function TemperatureControls({
  onIncrease,
  onDecrease,
  onReset,
}) {
  return (
    <div className="controls">
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
