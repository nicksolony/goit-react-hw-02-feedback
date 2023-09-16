import styled from '@emotion/styled';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: left;
    font-size: 40px;
    color: #010101;
    padding: 40px;
`;

export const Title = styled.h2`
`;

export const FeedbackOptions = styled.ul`
    padding:0;
    margin:0;
    list-style-type: none;
    display: flex;
    gap: 15px;
`;

export const FeedbackOption = styled.li`
    border: 1px solid #919191;
    padding:15px;
    border-radius: 4px;
    box-shadow: 2px 2px 0 0 #919191;
    text-transform: capitalize;

    :hover {
        background-color: #919191;
        cursor: pointer;
    };

    :active {
        color: #ffffff;
        background-color: #000000;
    }
`;

export const Statistics = styled.div`

`;

export const Reviews = styled.ul`
    list-style-type: none;
    padding:0;
`;

