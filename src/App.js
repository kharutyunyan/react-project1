import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

import styled from "styled-components";

const Blok = styled.div`
    ${ ({width})  => width ? `width: ${width};` : ''}
    ${ ({height})  => height ? `height: ${height};` : ''}
    ${ ({bgColor})  => bgColor ? `background-color: ${bgColor};` : ''}
    ${ ({borderRadius}) => borderRadius ? `border-radius: ${borderRadius};` : ''}
    ${ ({borderColor}) => borderColor ? `border: 1px solid ${borderColor};` : ''}
    ${ ({position}) => position ? `position: ${position};` : ''}
    ${ ({align}) => align ?  `text-align: ${align};` : '' }
`;



const App = () => {
    return (
       <>
           <GlobalStyles />
            <h1>Hello</h1>
            <Blok height='50px' bgColor="orange"></Blok>
            <Blok width="80px" height="100px" bgColor="violet"></Blok>
            <Blok width='120px' height='65px' bgColor='yellow' borderRadius="4px 4px 4px 4px" borderColor="green"></Blok>
            <Blok width="60px" height='80px' bgColor='green' position='relative'></Blok>
            <Blok width="120px" height="95px" bgColor="purple" align="center">Text</Blok>
            
       </> 
    )
};


export default App