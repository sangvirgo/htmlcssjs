import React, {useState} from "react";

function Hooks(props) {
    const [word, setWord ] = useState("Sang nek hihih");

    const handleClick =() => {
        setWord("Gia Han vo tri");
    }

    return (
        <div>
            <h1>
                A state value: {word}  {props.message}
                <button className="btn-clickme" onClick={handleClick}>Click to change</button>
            </h1>
        </div>
    );
}

export default Hooks;