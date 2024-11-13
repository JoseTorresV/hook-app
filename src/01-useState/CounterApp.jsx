import React, { useState } from "react";

export const CounterApp = () => {
  // per mostrare il valore del contatore uso useState*
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  const handleCounter = (event) => {
    event.preventDefault();
    const value = { ...state, counter1: counter1 +1 };
    setCounter(value);
  };

  return (
    <>
      <h1>Counter 1: {counter1}</h1>
      <h1>Counter 2: {counter2}</h1>
      <h1>Counter 3: {counter3}</h1>

      <hr />

      <button type="button" className="btn btn-primary" onClick={handleCounter}>
        +1
      </button>
    </>
  );
};
