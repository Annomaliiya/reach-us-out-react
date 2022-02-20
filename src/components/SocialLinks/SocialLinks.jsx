import React from "react";
import styled from "styled-components";
import Linkedin from "../../images/socialIcons/linkedin.svg";
import Twitter from "../../images/socialIcons/twitter.svg";
import Facebook from "../../images/socialIcons/facebook.svg";
import Pinterest from "../../images/socialIcons/pinterest.svg";

const List = styled.ul`
  display: flex;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    padding-left: 30%;
  }
`;
const Link = styled.a`
  cursor: pointer;
  margin-left: 10px;
  fill: #696969;
  &:hover {
    fill: #ff9900;
  }
`;
const SocialLinks = () => {
  const applySvg = (src) => (
    <svg width={20} height={20}>
      <use href={src + "#icon"} />
    </svg>
  );

  return (
    <List>
      <li>
        <Link url="" width="20" height="20" alt="twitter-logo">
          {applySvg(Linkedin)}
        </Link>
      </li>
      <li>
        <Link url="" width="20" height="20" alt="twitter-logo">
          {applySvg(Twitter)}
        </Link>
      </li>
      <li>
        <Link url="" width="20" height="20" alt="twitter-logo">
          {applySvg(Facebook)}
        </Link>
      </li>
      <li>
        <Link url="" width="20" height="20" alt="twitter-logo">
          {applySvg(Pinterest)}
        </Link>
      </li>
    </List>
  );
};

export default SocialLinks;
