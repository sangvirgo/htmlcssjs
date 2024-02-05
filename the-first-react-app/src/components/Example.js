const bool=false;
const str="Sang";

function Example(props) {
    return (
        <div>
            <h1>
                The value of the toggleBoolean prop is:{props.toggleBoolean.toString()} 
            </h1>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str prop is: <em>{props.str}</em></p>        </div>
    )
}

export default function App() {
    return (
        <div className="App">
            <Example
                toggleBoolean={!bool}
                math={69-149}
                str={str + 'nekkk' + 'hihihih'}
            />
        </div>
    )
}