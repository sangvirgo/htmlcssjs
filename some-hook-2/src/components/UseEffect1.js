import React, { useEffect, useState } from "react";
/*
1. useEffect({callBack})
-goi callBack moi khi component duoc re-render
2. useEffect({callBack, []})
3. useEffect({callBack}, [deps])
*/
//----------------------------------------//
/*
1. callback luon duoc goi sau khi conponents mounted

*/

const UseEffect1 = () => {
  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState("");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // useEffect
  useEffect(() => {
    console.log("Mounted!");
    // thay doi title web
    document.title = title;
  });

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>

      {toggle && <h1>He lo cac ban!!!!!!</h1>}

      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      {/* call apif  */}
    </div>
  );
};

export default UseEffect1;
