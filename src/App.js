import React from "react";
import "./App.css";
import Timer from "./Timer/Timer";

function App() {
  return (
    <Timer
      time={3000}
      autostart={false}
      step={500}
      onTick={(time) => console.log("Залишилось часу: " + time)}
      onTimeEnd={() => console.log("Час вийшов!")}
      onTimeStart={() => console.log("Таймер запущено!")}
      onTimePause={() => console.log("Таймер на паузі!")}
    />
  );
}

export default App;
