import React, { useState } from "react";
import './Counter.styles.css'
function Counter() {
  const [count, setCount] = useState<number>(0);
  const [limit, setLimit] = useState<number | string>(10);
  const [errorMassage, setErrorMessage] = useState<string | null>("");

  const increase = () => {
    setErrorMessage(null);
    if (count < Number(limit)) {
      setCount(count + 1);
    } else {
      setErrorMessage(`Count can't be more than ${limit}`);
    }
  };

  const decrease = () => {
    setErrorMessage(null);
    if (count > 0) {
      setCount(count - 1);
    } else {
      setErrorMessage(`Count can't be less than 0`);
    }
  };

  const reset = () => {
    setErrorMessage(null);
    setCount(0);
  };

  const handleSetLimit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (/^\d*$/.test(inputValue)) {
      const parsedValue = parseInt(inputValue, 10);
      console.log(parsedValue);
      setLimit(parsedValue);
      if (count > parsedValue) {
        setCount(parsedValue);
      }
    }
  };

  return (
    <div className="App">
      <div>
        <label>Limit : </label>
        <input type="number" value={limit} onChange={handleSetLimit} className="number-input" />
      </div>
      <p>Count : {count}</p>

      <p style={{ color: "red" }}>
        {errorMassage ? errorMassage : <span>&nbsp;</span>}
      </p>

      <div className="btn-group">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div>Version 1.0.3</div>
      <br />
      <hr />
      <div>
        <a href="todo">Todo</a>
      </div>
    </div>
  );
}

export default Counter;
