import { Component } from "react";
import { Container, FeedbackOptions, FeedbackOption } from "./App.styled";


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
        <h2 className="title">Please leave feedback</h2>
        <FeedbackOptions>
          <FeedbackOption>Good</FeedbackOption>
          <FeedbackOption>Neutral</FeedbackOption>
          <FeedbackOption>Bad</FeedbackOption>
        </FeedbackOptions>

      </Container>  
    )
  };
};
