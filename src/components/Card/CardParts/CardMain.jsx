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

const MainDiv = styled.div``;
const ImgCont = styled.div`
  position: relative;
  display: inline-block;
  margin: 2rem 1rem;
`;

const Img = styled.img`
  display: block;
`;
const Status = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px 0;
  margin: 0;
  text-align: center;
`;

const InfoDiv = styled.div`
  display: flex;
`;
export default CardMain;
