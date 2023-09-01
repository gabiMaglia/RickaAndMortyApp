import React from 'react'
import styled from "styled-components";
  /**
 * This function represents the NavBar buttons 
 * 
 * @returns {React.JSX}
 */
const NavBtn = ({content}) => {
  return (
    <SearchButton>{content}</SearchButton>
  )
}
const SearchButton = styled.label`
    text-decoration: none;
    color: var(--mainFontColor);
    text-decoration: none;
    text-transform: uppercase;
    text-align: right;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 1px;
    text-shadow: var(--mainFontColor) 1px 0 5px;
    background: none;
    cursor: pointer;

`;
export default NavBtn