/**
 * @jsx h
 * @jsxFrag Fragment
*/
import { Component, h, Fragment } from "preact";
import { setup } from "@twind";
import Toggle from "../islands/Button.tsx";
import Hello from "../islands/Hello.tsx";

export default class Home extends Component {

  render(): preact.ComponentChild {
    return (
      <>
      <Hello />
      <Toggle />
      </>
    )
  }
}
