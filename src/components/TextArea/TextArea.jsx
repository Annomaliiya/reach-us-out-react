import styled from "styled-components";

const TextArea = styled.textarea`
  font-size: 14px;
  font-family: inherit;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 10px;
  &::placeholder {
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    width: 450px;
    font-size: 18px;
    padding-top: 20px;
    padding-bottom: 20px;
    &::placeholder {
      font-size: 18px;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 189px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 46px;
  }
`;
export default TextArea;
