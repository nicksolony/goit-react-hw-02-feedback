import { Component } from "react";
import { Container } from "./App.styled";


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  render() {
    let { good, neutral, bad } = this.state;

    return (
      <Container>
        React homework template
      </Container>  
    )
  };
};
