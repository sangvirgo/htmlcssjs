import React, { useEffect, useState } from "react";

const UseEffect5 = () => {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Mounted or Re-Render lan ${count}`);

    return () => {
      console.log(`Cleanup lan ${count}`);
    };
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Click me
      </button>

      {toggle && (
        <div>
          <button
            onClick={() => {
              setCount((preCount) => preCount + 1);
            }}
          >
            Count
          </button>
          <h1>{count}</h1>
        </div>
      )}
    </div>
  );
};

export default UseEffect5;

/*
1. useEffect({callBack})
-goi callBack moi khi component duoc re-render
2. useEffect({callBack, []})
chi goi lai callBack mot lan sau khi component duoc  mounted
3. useEffect({callBack}, [deps])
callBack duoc goi lai sau moi khi deps duoc thay doi
*/
//----------------------------------------//
/*
1. callback luon duoc goi sau khi conponents mounted
2.Clearnup function luon duoc goi truoc khi function duoc unmounted
3. Clearnup functuon luon duoc goi truoc khi callback duoc goi(tru mounted)
*/
