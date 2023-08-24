import React from "react";
import  styled  from './logo.css';
import MyFont from '../../assets/Fonts/get_schwifty.ttf'
const Logo = () => {
    
    const mainTitle = styled.h1`
      font-family: "RmFont";
    `;
    const subTitle = styled.h3``;

    const globalFont = createGlobalStyle`
        @font-face {
            font-family: 'RmFont';
             src: url(${MyFont}) format('truetype');
}
    `
  return (
    <><globalFont>
        
          <mainTitle>Rick and Morty</mainTitle>
          <subTitle>app</subTitle>
    </globalFont>
    </>
  );
};

export default Logo;
