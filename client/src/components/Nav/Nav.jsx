import React from "react";
import styled from "styled-components";

export default function Nav() {
  return (
    <React.Fragment>
      <StyledButton>Home</StyledButton>
      <StyledLinkButton>
        <li>Home</li>
        <li>Price</li>
        <li>About</li>
      </StyledLinkButton>
    </React.Fragment>
  );
}

const StyledButton = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 1em;
  margin: 0;
  width: calc(100vw - 2em);
`;

const StyledLinkButton = styled.ul`
  position: absolute;
  left: 0;
  bottom: 0;

  li {
    background-color: ${(props) => props.theme.color.dark};
    opacity: 0.6;
  }
`;
