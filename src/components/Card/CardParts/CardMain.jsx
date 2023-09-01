import React from "react";
import InfoBox from "./InfoBox";
import { styled } from "styled-components";


/**
 * This function represents the Card Main
 *
 * @returns {React.JSX}
 */
const CardMain = ({ name, image, status, species, gender, title }) => {
  return (
    <MainDiv>
      <ImgCont>
        <Img src={image} alt={name} />
        <Status>{status}</Status>
      </ImgCont>

      <InfoDiv>
        <InfoBox title="Species" info={species} />
        <InfoBox title="Gender" info={gender} />
      </InfoDiv>
    </MainDiv>
  );
};

const MainDiv = styled.div`
border-top: 1px solid var(--mainFontColor);;
border-bottom: none;
`;

const ImgCont = styled.div`
  position: relative;
  display: inline-block;
  margin: 2rem 0;
  `;

const Img = styled.img`
  min-width: 235px;
  display: block;
  width: 75%;
  padding: .2rem;
  margin-inline: auto;
  border-radius: 12px;
  border: 3px solid white;
`;
const Status = styled.h3`
  position: absolute;
  bottom: 3px;
  left: 38px;
  width: 76%;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--mainFontColor);
  padding: 10px 0;
  margin: 0;
  text-align: center;
`;

const InfoDiv = styled.div`
  display: flex;
`;
export default CardMain;
