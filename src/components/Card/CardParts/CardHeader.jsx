import React from "react";
import styled  from "styled-components";




const CardHeader = ({event, name}) => {
  return (
    <HeaderDiv>
      <CloseButton onClick={event}>
        X
      </CloseButton>
      <CardName>{name}</CardName>
    </HeaderDiv>
  );
};




const HeaderDiv = styled.header `
    background-color: black;
    display: flex;
    justify-content: space-between;
`
const CloseButton = styled.button `
    color: black;
`
const CardName = styled.h2 `
    color: white;
    margin-right: 1rem;
`

export default CardHeader;
