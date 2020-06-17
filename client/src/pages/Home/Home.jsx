import React from "react";
import styled from "styled-components";
import Hero from "../../components/Hero/Hero";

export default function Home() {
  return (
    <main>
      {/* ======== */}
      {/*   HERO   */}
      {/* ======== */}
      <Hero />

      {/* =========== */}
      {/*   CONTENT   */}
      {/* =========== */}
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        quisquam libero? Et, non modi, error magni blanditiis id vitae voluptate
        minima tenetur quis ab vero, veritatis nam ipsa nobis voluptates? Quos
        voluptatum quod iste facere neque maiores voluptates saepe eum?
      </StyledParagraph>
    </main>
  );
}

const StyledParagraph = styled.p`
  max-width: ${(props) => props.theme.max.width};
  padding: 1em;
  margin: 1em auto;
`;
