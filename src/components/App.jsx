import { Component } from "react";
import { Container, Title, FeedbackOptions, FeedbackOption, Statistics, Reviews, Review } from "./App.styled";


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
    
    let options = Object.keys(this.state);
    let total = Object.values(this.state).reduce((a, b) => a + b, 0);
    
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
            {options.map((option) => {
            return (
              <Review key={option}>
                {option}: {this.state[option]}</Review> 
              )
            })
            }
            <li>Total: { total}</li>
          </Reviews>
        </Statistics>

      </Container>  
    )
  };
};
