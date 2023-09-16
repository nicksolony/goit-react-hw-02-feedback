import { Container } from "components/App.styled"
import { Reviews, Review } from "./Statistics.styled"


export const Statistics = ({options, total, positivePercentage, state}) => {
    return (
        <Container>
            <h2>Statistics</h2>
            <Reviews>
                {options.map((option) => {
                    return (
                        <Review key={option}>
                            {option}: {state[option]}</Review>
                    )
                })
                }
                <li>Total: {total}</li>
                <li>Positive feedback: {positivePercentage.toFixed(0)}%</li>
                </Reviews>
        </Container>
    );
};