import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Blok from "./Components/StyledComponent/Blok";

import Text from "./Components/StyledComponent/Text"








const App = () => {
    return (
       <>
           <GlobalStyles />
            <h1>Hello</h1>

            <Blok width="100px" height="60px" bgColor="green"></Blok>
             

             <Text size="40px">Hello</Text>
          

       </> 
    )
};


export default App;