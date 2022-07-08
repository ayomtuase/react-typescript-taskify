import React from "react";
import tw  from "twin.macro";

const AppContainer = tw.div`  
  bg-blue  
  min-h-screen
  overflow-auto
`;

const Heading = tw.h1`
  font-cursive
  text-4xl
  text-center
  text-white
  font-semibold
  tracking-wider
  uppercase
  mt-4
`

function App(): JSX.Element {
  return (
    <AppContainer>
      <Heading>Taskify</Heading>
      
    </AppContainer>    
  );
}

export default App;
