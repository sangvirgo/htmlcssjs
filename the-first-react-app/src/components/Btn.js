function Btn() {
    const clickHandler=() => alert("clicked");
    const mouseOver=() => alert("Mouse over there!");
    return (
        <div>
        <button className="btn-clickme" onClick={clickHandler}>
            Click me
        </button>

        <button className="btn-overme" onMouseUp={mouseOver}>
            Over me
        </button>
        </div>
    )
}

export default Btn;