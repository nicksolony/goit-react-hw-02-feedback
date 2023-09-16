import { Component } from "react";
import { Container, Title, FeedbackOptions, FeedbackOption, Statistics, Reviews } from "./App.styled";


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleReview = (option) => {
    
    let id = option.target.innerHTML;
    
    this.setState(prevState => {
      return {
        ...prevState,
        [id]: prevState[id] + 1
      };
    });
  };
  

  render() {
    let { good, neutral, bad } = this.state;
    let options = Object.keys(this.state);
    
    return (
      <Container>
        <Title>Please leave feedback</Title>
        <FeedbackOptions>
          {options.map((option) => {
            return (
              <FeedbackOption key={option} onClick={this.handleReview}>{option}</FeedbackOption> 
              )
          })

          }
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
