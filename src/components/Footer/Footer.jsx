import styled from "styled-components";
import BigCircle from "../../images/footer-big.png";
import Circle from "../../images/footer-small.png";
import Upsider from "../../images/footer-upsidedown.png";

const Footer = styled.footer`
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

// const Footer = () => {
//   return (
//     <StyledFooter>
//       <SocialLinks></SocialLinks>
//     </StyledFooter>
//   );
// };

export default Footer;
