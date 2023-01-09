import React, { useState } from 'react';

function PomodoroTimer() {
  const [time, setTime] = useState(25 * 60 * 1000); // 25 minutes in milliseconds
  const [intervalId, setIntervalId] = useState(null);

  function startTimer() {
    clearInterval(intervalId);
    const id = setInterval(() => {
      setTime((time) => time - 1000);
    }, 1000);
    setIntervalId(id);
  }

  function pauseTimer() {
    clearInterval(intervalId);
  }

  function resetTimer() {
    clearInterval(intervalId);
    setTime(25 * 60 * 1000);
  }

  return (
    <div>
      <div>{time}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
