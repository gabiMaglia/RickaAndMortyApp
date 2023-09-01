import React from "react";

import styled from "styled-components";

const Footer = styled.footer`
  margin-top: 25px;
  border: 2px solid white;
  height: 4.5rem;
  display: grid;
  place-content: center;
  background-color: black;
`;
const Detail = styled.p`
  font-size: 16px;
  color: white;
  font-weight: 800;
`;
/**
 * This function represents the Card Footer
 *
 * @returns {React.JSX}
 */

const CardFooter = ({ title }) => {
  return (
    <Footer>
      <Detail>{title.toUpperCase()}</Detail>
    </Footer>
  );
};

export default CardFooter;
