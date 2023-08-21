import React from "react";
import InfoBox from "./InfoBox";
import { styled } from "styled-components";

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
border-top: 1px solid white;
border-bottom: none;
`;

const ImgCont = styled.div`
  display: inline-block;
  margin: 2rem 0;
  position: relative;
  `;

const Img = styled.img`
  display: block;
  width: 75%;
  padding: .2rem;
  margin-inline: auto;
  border-radius: 12px;
  border: 3px solid white;
`;
const Status = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px 0;
  margin: 0;
  text-align: center;
`;

const InfoDiv = styled.div`
  display: flex;
`;
export default CardMain;
