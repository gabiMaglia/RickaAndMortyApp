import React from "react";
import styled from "styled-components";

const SearchBarCont = styled.div`
  text-align: center;
  padding-block: 1rem;
  `;

const SearchImput = styled.input`
  font-size: 16px;
  width: 420px;
  height: 2rem;
  background-color: white;
  color: black;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
`;
const SearchButton = styled.button`
  font-size: 16px;
  height: 2rem;
  width: 8rem;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: black;

`;
export default function SearchBar(props) {
  return (
    <SearchBarCont>
      <SearchImput type="search" />
      <SearchButton onClick={props.onSearch}>Agregar</SearchButton>
    </SearchBarCont>
  );
}
