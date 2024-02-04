import React from "react";
import myClass from "./myClass";

export default class mainClass extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello from Main!</h1>
                <myClass/>
            </div>
        );
    }
}