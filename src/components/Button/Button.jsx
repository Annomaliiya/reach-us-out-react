import styled from "styled-components";

const Button = styled.button`
  width: 218px;
  background-color: #fad34f;
  margin: 23px auto;
  font-size: 18px;
  font-family: inherit;
  color: #fff;
  padding: 15px 20px;
  border-radius: 500px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #ff9900;
  }
  @media screen and (min-width: 768px) {
    padding: 27px 52px;
    margin-left: 0;
  }
`;

export default Button;
