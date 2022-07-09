import React from "react";

export default class HelloWorld extends React.Component<{guess?:string}, {date: Date}> {
    timerId!: number;
    constructor(props:{guess?:string}) {
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(), 1000
        )
    }

    tick() {
        this.setState({date: new Date()})
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return (
            <>
            <h1>Hello world and hello to you, {this.props.guess || "anon"}</h1>
            <h1>Today is {this.state.date.toLocaleDateString()}, and the time is {this.state.date.toLocaleTimeString()}</h1>
            </>
        )
    }
}