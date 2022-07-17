/** @jsx h */
import { Component, h, Fragment } from "preact";
import { tw } from "@twind";
import Form from "../islands/Form.tsx";

// deno-lint-ignore ban-types
export default class Hello extends Component<{}, {guess:string}> {
  // deno-lint-ignore ban-types
  constructor(props:{}) {
    super(props);
    this.state = {guess: "anon"}
    this.handleForm = this.handleForm.bind(this)
  }

  handleForm(guess:string){
    if (guess == "") {
        guess = "anon"
    }
    this.setState({guess: guess})
  }

  render(): preact.ComponentChild {
    return (
      <div>
        <h1>Hello world and hello you, { this.state.guess }</h1>
        <Form callback={this.handleForm} />
      </div>
    )
  }
}
