import React, { useState, useEffect } from 'react';
import './Timer.css'

function Timer() {
  const [inputTime, setInputTime] = useState(10);
  const [remainingTime, setRemainingTime] = useState(inputTime);
  const [isActive, setIsActive] = useState(false);

 
  const startTimer = () => {
    setRemainingTime(inputTime);
    setIsActive(true);
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
    <div className='timer-container'>
      <h2 className='timer-title'>Timer-2000</h2>
      <div className='input-container'>
        <input
          type="number"
          value={inputTime}
          onChange={(e) => setInputTime(Number(e.target.value))}
          disabled={isActive} // Disable input when timer is active
        />
        <button onClick={startTimer} disabled={isActive}>
          Start
        </button>
      </div>
      <div className='output-container'>
        <h3>Time Left:</h3>
        <p> {remainingTime} </p>
      </div>
    </div>
  );
}

export default Timer;
