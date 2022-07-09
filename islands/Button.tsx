/** @jsx h */
import { Attributes, Component, ComponentChild, ComponentChildren, h, Ref, Fragment } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface CounterProps {
  start: number;
}

// deno-lint-ignore ban-types
export default class Toggle extends Component<{}, {isOn: boolean}> {

  // deno-lint-ignore ban-types
  constructor(props: {}) {
    super(props)
    this.state = {isOn: false}
    this.handleButton = this.handleButton.bind(this)
  }

  handleButton(){
    this.setState((prevState)=>({isOn: !prevState.isOn}))
  }

  render(): ComponentChild {
    return (
      <Fragment>
      <h1>{this.state.isOn? "ON":"OFF"}</h1>
      <button onClick={this.handleButton}>Toggle</button>
      </Fragment>
    )
  }
}
