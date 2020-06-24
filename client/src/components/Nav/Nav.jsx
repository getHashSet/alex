import React from "react";
import styled from "styled-components";

export default function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>Home</li>
        <li>Prices</li>
        <li>Contact</li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 1em;
  margin: 0;
  width: calc(100vw - 2em);
`;
