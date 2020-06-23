import React from "react";
import styled from "styled-components";

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
        {props.priceCards.map((item) => {
          return <StyledCard>{item.cost}</StyledCard>;
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
