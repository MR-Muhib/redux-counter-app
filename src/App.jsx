import { useState } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import Stats from "./components/counter/Stats";

// initialize counter array of objects
const initialCounters = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

function App() {
  const [counters, setCounters] = useState(initialCounters);

  const handleIncrement = (counterId) => {
    const updateCounter = counters.map((counter) =>
      counter.id === counterId
        ? { ...counter, value: counter.value + 1 }
        : counter
    );
    setCounters(updateCounter);
  };

  const handleDecrement = (counterId) => {
    const updateCounter = counters.map((counter) =>
      counter.id === counterId
        ? { ...counter, value: counter.value - 1 }
        : counter
    );
    setCounters(updateCounter);
  };

  const totalCount = counters.reduce(
    (totalCount, counter) => totalCount + counter.value,
    0
  );

  return (
    <>
      <h1 className="text-center m-5 font-semibold text-2xl">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            count={counter.value}
            onHandleIncrement={() => handleIncrement(counter.id)}
            onHandleDecrement={() => handleDecrement(counter.id)}
          />
        ))}

        <Stats TotalCount={totalCount} />
      </div>
    </>
  );
}

export default App;
