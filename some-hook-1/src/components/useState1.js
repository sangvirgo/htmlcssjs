import React, { useState } from "react";

const UseState1 = () => {
  const [info, setInfo] = useState({
    name: "Sang",
    age: 20,
    address: "Tien Giang",
  });

  const handlerUpdate = () => {
    setInfo({
      ...info,
      mylove: "Su",
    });
  };

  return (
    <div className=" justify-center content-center">
      <h1 className="p-4 ">{JSON.stringify(info)}</h1>
      <button
        className="bg-red-700 border border-blue-500"
        onClick={handlerUpdate}
      >
        Click me
      </button>
    </div>
  );
};

export default UseState1;
