import { Component } from "react";
import { Container, Title, FeedbackOptions, FeedbackOption } from "./App.styled";
import { Statistics } from "./Statistics/Statistics";


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    
    let id = option.target.innerHTML;
    
    this.setState(prevState => {
      return {
        ...prevState,
        [id]: prevState[id] + 1
      };
    });
  };
  

  render() {
    
    let options = Object.keys(this.state);
    let total = Object.values(this.state).reduce((a, b) => a + b, 0);
    let positivePercentage = this.state.good ? this.state.good / total * 100 : 0;
    
    return (
      <Container>
        <Title>Please leave feedback</Title>
        <FeedbackOptions>
          {options.map((option) => {
            return (
              <FeedbackOption key={option} onClick={this.onLeaveFeedback}>{option}</FeedbackOption> 
              )
            })
          }
        </FeedbackOptions>
        <Statistics options={options} total={total} positivePercentage={positivePercentage} state={this.state}>
        </Statistics>

      </Container>  
    )
  };
};
