import styled from 'styled-components';

const Button = styled.div`
    width: 100px;
    cursor: pointer;
    text-decoration: none;
    color: white;
    background-color: ${props => props.bg === "orange" ? "orange" : "indigo"};
    margin: 0 auto;
    padding: 5px;
    font-size: 16px;
`

export default Button;