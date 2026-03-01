import React from "react";

export default function HistoryList({ history }) {
  return (
    <div className="history-list">
      <h2>Historial de temperaturas:</h2>
      <ul>
        {history.map((register) => {
          return (
            <li key={register.id}>
              {register.time} - {register.temp}°C
            </li>
          );
        })}
      </ul>
    </div>
  );
}
