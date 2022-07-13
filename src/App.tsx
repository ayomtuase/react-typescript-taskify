import React, { useState, useRef } from "react";

import { AppContainer, Heading } from "./Styles";
import InputField from './components/InputField'

function App(): JSX.Element {

  const [todo, setTodo] = useState('');
  const inputRef = useRef<HTMLInputElement>(null!);

  const handleTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodo('')
    inputRef.current.blur();
  }

  return (
    <AppContainer>
      <Heading>Taskify</Heading>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleTodoSubmit={handleTodoSubmit}
        inputRef={inputRef}
      />

    </AppContainer>
  );
}

export default App;
