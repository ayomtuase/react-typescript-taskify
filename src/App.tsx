import React from "react";

import { AppContainer, Heading } from "./Styles";
import InputField from './components/InputField'

function App(): JSX.Element {
  return (
    <AppContainer>
      <Heading>Taskify</Heading>
      <InputField/>

    </AppContainer>
  );
}

export default App;
