import React from "react";
import styled from "styled-components";
import Price from "../../components/Price/Price";

// ---------- //
//   RETURN   //
// ---------- //
export default function Cost() {
  return (
    <StyledRoot>
      <Price />
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
