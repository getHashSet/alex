import React from "react";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";

// ---------- //
//   EXPORT   //
// ---------- //
export default function Cost() {
  return (
    <StyledRoot>
      <h1>Contact Us</h1>
      <Nav />
    </StyledRoot>
  );
}

// ---------- //
//   STYLES   //
// ---------- //
const StyledRoot = styled.main`
  margin: 0;
  padding: 1em;
`;
