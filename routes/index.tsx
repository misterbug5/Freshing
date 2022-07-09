/**
 * @jsx h
 * @jsxFrag Fragment
*/
import { Component, h, Fragment } from "preact";
import { tw } from "@twind";
import Toggle from "../islands/Button.tsx";

export default class Home extends Component<{guess?:string}> {
  constructor(props:{guess?:string}) {
    super(props);
  }

  render(): preact.ComponentChild {
    return (
      <>
      <h1>Hello world and hello you, { this.props.guess || "anon" }</h1>
      <Toggle />
      </>
    )
  }
}
