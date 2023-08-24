import { React, useState } from "react";

import styled from "styled-components";

export default function SearchBar({addNew, maxChar, clearBoard}) {
  const [input, setintput] = useState('');

  const handleWrite = (e) => {
    const inputValue = Number(e.target.value);
    setintput(inputValue);
  };

  const handleRandomSearch = () => {
    const random = Math.trunc(Math.random() * maxChar);
    addNew(random);
  };

  const handleClear = () => {
    clearBoard()
  }
  const handleIdSearch = (e) => {
    input && typeof input === 'number'
      ? addNew(input)
      : window.alert(`insert a number between 1 and ${maxChar}`);
      e.target.previousSibling.value = ''
      setintput('')
  };

  return (
    <SearchBarCont>
      <SearchButton onClick={handleClear}>Clear </SearchButton>
      <SearchButton onClick={handleRandomSearch}>
        Random
      </SearchButton>
      <SearchInput placeholder="insert id" onChange={handleWrite} type="search" />
      <SearchButton onClick={handleIdSearch}>Add</SearchButton>
    </SearchBarCont>
  );
}













const SearchBarCont = styled.div`
  text-align: center;
  display: flex;
  gap: 2rem;
  align-items: center;

`;

const SearchInput = styled.input`
  padding: 1rem;
  color: var(--mainFontColor);
  text-decoration: none;
  text-transform: uppercase;
  text-align: right;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 2px;
  text-shadow: var(--mainFontColor) 1px 0 5px;
  border-bottom: solid 1px var(--mainBorderColor);
  border: none;
  width: 420px;
  height: 3.3rem;
  background-color: rgba(0, 0, 0, 0.034);
  color: white;
  outline: none;
  
 
`;
const SearchButton = styled.button`
  position: relative;
  color: var(--mainFontColor);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 8.5px;
  font-weight: 600;
  letter-spacing: 2px;
  text-shadow: (--mainBorderColor) 1px 0 10px;
  text-align: right;
  height: 63px;
  width: 66px;
  border: solid 1px var(--mainBorderColor);
  border-radius: 175px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
