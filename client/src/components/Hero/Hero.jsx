import React from "react";
import styled from "styled-components";

// ================= //
//   DEFAULT PROPS   //
// ================= //
Hero.defaultProps = {
  backgroundImage:
    "https://prjectalex520.s3-us-west-1.amazonaws.com/drums_top_42.jpg",
  title: (
    <React.Fragment>
      project_<span>alex</span>
    </React.Fragment>
  ),
  subtitle: "connect with your music",
};

export default function Hero(props) {
  return (
    <StyledHero
      style={{
        background: `url(${props.backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div></div>
      <div>
        <h1> {props.title} </h1>
        <h2> {props.subtitle} </h2>
      </div>
    </StyledHero>
  );
}

// ========== //
//   STYLES   //
// ========== //
const StyledHero = styled.div`
  position: relative;
  margin: 0;
  height: 100vh;
  background-color: ${(props) => props.theme.color.dark};
  color: ${(props) => props.theme.color.white};
  z-index: -1;

  div:first-child {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background: linear-gradient(
      128deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 0, 0, 1) 48%,
      rgba(0, 212, 255, 0) 100%
    );
    user-select: none;
    z-index: -1;
  }

  div:last-child {
    padding: 2em 1em;
    max-width: ${(props) => props.theme.max.width};
    margin: auto;

    h1,
    h2 {
      user-select: none;
    }

    h1 {
      line-height: 2em;
      font-size: 3em;
      font-weight: 800;

      span {
        font-weight: 100;
      }

      @media (max-width: 768px) {
        font-size: 2em;
      }
    }

    h2 {
      font-size: 1.8em;
      font-weight: 200;

      &::first-letter {
        text-transform: uppercase;
      }

      @media (max-width: 768px) {
        font-size: 1.5em;
      }
    }
  }
`;
