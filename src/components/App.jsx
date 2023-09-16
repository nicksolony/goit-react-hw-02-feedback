import { Component } from "react";
import { Container, Title, FeedbackOptions, FeedbackOption, Statistics, Reviews } from "./App.styled";


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
        <Title>Please leave feedback</Title>
        <FeedbackOptions>
          <FeedbackOption>Good</FeedbackOption>
          <FeedbackOption>Neutral</FeedbackOption>
          <FeedbackOption>Bad</FeedbackOption>
        </FeedbackOptions>
        <Statistics>
          <h2>Statistics</h2>
          <Reviews>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
          </Reviews>
        </Statistics>

      </Container>  
    )
  };
};
