import { useState, useEffect } from "react";
import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.key === 'ArrowUp') {
            setCount(count + 1);
          } else if (event.key === 'ArrowDown') {
            setCount(count - 1);
          }
        };
      
        window.addEventListener('keydown', handleKeyPress);
      
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, [count]);
  
    return (
      <div className="counter-container">
        <h2 className="counter-title">Counter</h2>
        <p className="count-display">{count}</p>
        <div className="button-container">
            <button onClick={() => setCount(count + 1)}>↑</button>
            <button onClick={() => setCount(count - 1)}>↓</button>
        </div>
      </div>
    );
  }