import React, { useState, useEffect } from 'react';

function Timer() {
  const [inputTime, setInputTime] = useState(10); // Set default duration (in seconds)
  const [remainingTime, setRemainingTime] = useState(inputTime);
  const [isActive, setIsActive] = useState(false); // To control if the timer is running

  // Function to start the timer
  const startTimer = () => {
    setRemainingTime(inputTime); // Set the remaining time to the input value
    setIsActive(true); // Start the timer
  };

  useEffect(() => {
    let intervalId;

    if (isActive && remainingTime > 0) {
      intervalId = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsActive(false);
      alert('Time is up!');
    }

    return () => clearInterval(intervalId);
  }, [isActive, remainingTime]);

  return (
    <div>
      <h2>Timer</h2>
      <div>
        <label>Set Timer (seconds): </label>
        <input
          type="number"
          value={inputTime}
          onChange={(e) => setInputTime(Number(e.target.value))}
          disabled={isActive} // Disable input when timer is active
        />
        <button onClick={startTimer} disabled={isActive}>
          Start Timer
        </button>
      </div>
      <div>
        <h3>Time Left: {remainingTime} seconds</h3>
      </div>
    </div>
  );
}

export default Timer;
