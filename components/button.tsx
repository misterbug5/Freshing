// deno-lint-ignore-file ban-types
import React from "react";

export default class Toggle extends React.Component<{}, {isOn: boolean}> {
    constructor(props:{}) {
        super(props)
        this.state = {isOn: false}
        this.buttonHandle = this.buttonHandle.bind(this) // I don't know why, but is needed to work ¯\_(ツ)_/¯
    }

    buttonHandle() {
        console.log("Clicked!")
        this.setState((prevState) => ({
            isOn: !prevState.isOn
        }))
    }

    render(){
        return (
            <>
            <h1>{this.state.isOn ? "ON" : "OFF"}</h1>
            <button onClick={this.buttonHandle}>Toggle Light</button>
            </>
        )
    }
}