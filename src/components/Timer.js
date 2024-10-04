import React, { useState, useEffect } from 'react';
import './Timer.css'

export default function Timer() {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div>
        <h2>Timer</h2>
        <p>Current Time: {time.toLocaleTimeString()}</p>
      </div>
    );
  }