/** @jsx h */
import { Attributes, Component, ComponentChild, ComponentChildren, h, Ref, Fragment } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw, apply } from "@twind";

// deno-lint-ignore ban-types
export default class Toggle extends Component<{}, {isOn: boolean}> {
  green = apply("text-green-600")
  red = apply("text-red-600")

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
      <div class={tw`grid justify-items-center gap-1`}>
        <h1 class={tw`${this.state.isOn ? this.green : this.red}`}>{this.state.isOn? "ON":"OFF"}</h1>
        <button class={tw`text-white dark:text-black bg-gray-700 hover:bg-gray-500 dark:bg-gray-400 dark:hover:bg-gray-200 p-2 transition ease-in-out duration-300`} onClick={this.handleButton}>Toggle</button>
      </div>
    )
  }
}
