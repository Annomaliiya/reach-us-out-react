import styled from "styled-components";

const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  @media screen and (max-width: 320px) {
    max-width: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 730px;
  }
  @media screen and (min-width: 1100px) {
    width: 1070px;
  }
`;

export default Container;
