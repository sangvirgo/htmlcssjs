// rfc
import React, { useState } from "react";

const price = [200, 345, 4454, 3434];

const UseState = () => {
  const [counter, setCounter] = useState(() => {
    const total = price.reduce((total, cur) => total + cur, 0);
    return total;
  });

  const handleIncrease = () => {
    setCounter((prevState) => prevState + 1);
    console.log(counter);
  };

  return (
    <div className=" justify-center content-center">
      <h1 className="p-4 ">{counter}</h1>
      <button
        className="bg-red-700 border border-blue-500"
        onClick={handleIncrease}
      >
        Click me
      </button>
    </div>
  );
};

export default UseState;
