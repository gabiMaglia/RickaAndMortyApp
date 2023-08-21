import React from "react";
import InfoBox from "./InfoBox";
import  styled  from "styled-components";


const Footer = styled.footer `
    margin-bottom: 2.5rem;
  
`
    

const CardFooter = ({title, info}) => {

    return (
    <Footer>
      <InfoBox title={title} info={info} />
    </Footer>
  );
};

export default CardFooter;
