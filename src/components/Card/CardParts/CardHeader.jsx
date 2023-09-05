import { React, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

/**
 * This function represents the Card Header
 *
 * @returns {React.JSX}
 */

const CardHeader = ({ id, event, name }) => {
  const regEx = /^[^\s]+\s+[^\s]+[^\s]+w/;
  const result = name.match(regEx);
  const { pathname } = useLocation()

  useEffect(() => {
    console.log(pathname)
  }, [])


  const handleClose = () => {
    event(id);
  };

  return (
    <HeaderDiv>
      {pathname === "/favorite" ?
        null
        :
        <CloseButton onClick={handleClose}></CloseButton>
      }
      <CardName>{result ? result[0] + "..." : name}</CardName>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.header`
  background-color: black;
  display: flex;
  min-height: 60px;
  width: 320px;
  width: 100%;
  justify-content: space-between;
  animation: light 5s infinite;

  @keyframes light {
    0% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 1);
    }
    47% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 1);
    }
    48% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 0.3);
    }
    49% {
      box-shadow: 0px 29px 45px -20px rgba(255, 255, 255, 1);
    }
    52% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 1);
    }
    53% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 0.3);
    }
    54% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 1);
    }
    85% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 1);
    }
    87% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 0.3);
    }
    88% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 1);
    }
    100% {
      box-shadow: 0px 29px 45px -22px rgba(255, 255, 255, 1);
    }
  }
`;
const CloseButton = styled.i`
  width: 60px;
  color: black;
  background-color: black;
  position: relative;
  outline: none !important;
  /* border: 0.1px solid grey; */
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 80%;
    height: 2px;
    background-color: #fff;
    transition: 0.3s ease-out;
    left: 50%;
    top: 50%;
  }
  &:after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &:hover,
  &:focus {
    &:before,
    &:after {
      transform: translate(-50%, -50%) rotate(180deg);
    }
  }
  `;
const CardName = styled.h2`
  flex: 1;
  font-size: 120%;
  font-weight: 800;
  color: white;
  margin-right: 1rem;
`;

export default CardHeader;
