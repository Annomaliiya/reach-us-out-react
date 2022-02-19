import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSection = styled.section`
  padding-top: 30px;
  @media screen and (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 100px;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 170px;
    padding-bottom: 170px;
  }
`;

const StyledTitle = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    font-size: 25px;
    text-align: left;
  }
  @media screen and (min-width: 1024px) {
    font-size: 40px;
    line-height: 1.3;
  }
`;

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledSection>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
