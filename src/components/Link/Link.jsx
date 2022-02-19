import React from "react";
import styled from "styled-components";

const Link = ({ url, src, alt, width, height }) => {
  const FacebookLink = styled.a`
    background: url(${src});
    background-repeat: no-repeat;
    background-position: right top;
    */ &:hover {
      fill: red;
    }
  `;

  return (
    <>
      <FacebookLink href={url} className="social-network-link">
        {
          <svg width={width} height={height}>
            <use href={src} />
          </svg>
        }
      </FacebookLink>
    </>
  );
};

export default Link;
