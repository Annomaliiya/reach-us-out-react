import PropTypes from "prop-types";
import styled from "styled-components";
import Map from "../../images/map.png";

const StyledContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  @media screen and (max-width: 320px) {
    max-width: 320px;
  }
  @media screen and (min-width: 768px) {
    background-image:
    width: 730px;
    
  }
  @media screen and (min-width: 1100px) {
    width: 1070px;
  }
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};
