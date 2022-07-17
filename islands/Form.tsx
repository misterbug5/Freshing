/** @jsx h */
import { Component, ComponentChild, h } from "preact";
import { tw } from "@twind";

export default class Form extends Component<{callback: (text:string)=>void}> {

  constructor(props: {callback: (text:string)=>void}) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event: Event){
    const eventCasted = event as SubmitEvent
    eventCasted.preventDefault()
    if (eventCasted.target !== null) {
        const form: HTMLFormElement = eventCasted.target as HTMLFormElement
        const input: HTMLInputElement = form.children.namedItem("guess") as HTMLInputElement
        this.props.callback(input.value)
    }
    
  }

  render(): ComponentChild {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="guess" id="guess" />
        <input type="submit" value="Login" />
      </form>
    )
  }
}
