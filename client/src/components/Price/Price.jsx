import React from "react";
import styled from "styled-components";

// -------- //
//   NOTE   //
// -------- //
// This component will take an array of objects and display the cards on the screen.

// --------- //
//   PROPS   //
// --------- //
Price.defaultProps = {
  priceCards: [
    {
      cost: "$40hr",
      name: "Per hour",
      includes: "xyz",
    },
    {
      cost: "$40hr",
      sale: "$100",
      name: "3 hours",
      includes: "xyz",
    },
    {
      cost: "$100hr",
      name: "Edits",
      includes: "xyz",
    },
  ],
};

// ---------- //
//   RETURN   //
// ---------- //
export default function Price(props) {
  return (
    <React.Fragment>
      <StyledRoot>
        {props.priceCards.map((item, index) => {
          return <StyledCard key={`cost_${index}`}>{item.cost}</StyledCard>;
        })}
      </StyledRoot>
    </React.Fragment>
  );
}

// ---------- //
//   STYLED   //
// ---------- //
const StyledRoot = styled.section`
  min-height: 30vh;
  background-color: #555;
  color: #fff;
`;

const StyledCard = styled.article`
  background-color: #f1f1f1;
  color: #fff;
`;
