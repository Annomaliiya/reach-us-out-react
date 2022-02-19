import styled from "styled-components";
import SocialLinks from "../SocialLinks";

// import Linkedin from "../../images/linkedin.svg";
// import Twitter from "../../images/twitter.svg";
// import Facebook from "../../images/facebook.svg";
// import Pinterest from "../../images/pinterest.svg";

import BigCircle from "../../images/footer-big.png";
import Circle from "../../images/footer-small.png";
import Upsider from "../../images/footer-upsidedown.png";

const StyledFooter = styled.footer`
  background: #fafafa;
  text-align: center;
  padding-top: 23px;
  padding-bottom: 23px;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media screen and (min-width: 1024px) {
    background-image: url(${BigCircle}), url(${Circle}), url(${Upsider});
    background-repeat: no-repeat;
    background-position: 15px -40px, right bottom, 90% top;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <SocialLinks></SocialLinks>
      {/* <Link url="" src={Linkedin} width="20" height="20" alt="twitter-logo" />
      <Link url="" src={Twitter} width="20" height="20" alt="twitter-logo" />
      <Link url="" src={Facebook} width="20" height="20" alt="twitter-logo" />
      <Link url="" src={Pinterest} width="20" height="20" alt="twitter-logo" /> */}
    </StyledFooter>
  );
};

export default Footer;
