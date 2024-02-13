import { useState } from "react";

export default function App() {
  const [myCounterState, setMyCounterState] = useState(0);

  function incrementCounter() {
    setMyCounterState(myCounterState + 1);
  }

  function decrementCounter() {
    setMyCounterState(myCounterState - 1);
  }

  function resetCounter() {
    setMyCounterState(0);
  }

  return (
    <div>
      <p>{myCounterState} cookies.</p>
      <button onClick={incrementCounter}>Get cookie</button>
      <button onClick={decrementCounter}>Eat cookie</button>
      <button onClick={resetCounter}>Reset counter</button>
    </div>
  );
}