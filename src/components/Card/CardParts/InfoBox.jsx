import React from "react";
import { styled } from "styled-components";

const DivBox = styled.div`
  border-radius: 4px;
  background-color: white;
  color: black;
  flex: 1;
  text-align: center;
  margin: 1rem;
  box-shadow: 10px 10px 2px #707070;
  `;
const InfoLabel = styled.label`
    display: block;
    background-color: black;
    color: white;
    height: 2rem;
`;

const Info = styled.h4`
  margin: 0;
`;

const InfoBox = ({ title, info }) => {
  const primerEspacioIndex = info.indexOf(" ");
  
  const slicedInfo =
    info.slice(0, primerEspacioIndex + 1) +
    "\n" +
    info.slice(primerEspacioIndex + 1);
  
  return (
    <DivBox>
      <InfoLabel htmlFor="gender">{title}</InfoLabel>
      {primerEspacioIndex !== -1 ? (
        <Info style={{ whiteSpace: 'pre' }}>{slicedInfo}</Info>
      ) : (
        <Info>{info}</Info>
      )}
    </DivBox>
  );
};

export default InfoBox;
