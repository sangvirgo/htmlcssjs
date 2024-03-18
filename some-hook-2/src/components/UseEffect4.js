import React, { useEffect, useState } from "react";

const UseEffect4 = () => {
  const [countDown, setCountDown] = useState(-1);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (countDown > 0) {
      const interval = setTimeout(() => {
        console.log("CoutDown", countDown);
        setCountDown((prevState) => prevState - 1);
      }, 1000);

      return () => clearTimeout(interval);
    }
  }, [countDown]); //Dependencies là một mảng rỗng, chỉ chạy một lần khi component mount

  const handleInput = (event) => {
    setCountDown(parseInt(event.target.value));
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      setToggle(!toggle);
    }
  };

  return (
    <div>
      <input
        type="number"
        // value={countDown}
        className="border border-red-400"
        onChange={handleInput}
        onKeyDown={handleEnter}
      />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Start Count Down
      </button>

      {toggle && <h1 className="text-4xl text-green-500">{countDown}</h1>}
    </div>
  );
};

export default UseEffect4;
