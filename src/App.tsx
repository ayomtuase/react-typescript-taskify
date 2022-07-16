import React, { useState } from "react";
import tw from "twin.macro";
import InputField from './components/InputField'
import TasksList from "./components/TasksList";

export const AppContainer = tw.div`  
  bg-blue 
  min-h-screen 
  overflow-auto  
`;

export const Heading = tw.h1`
  font-cursive 
  text-4xl 
  text-center 
  text-white
  font-semibold
  tracking-wider
  uppercase
  mt-4
`;
export const TaskListContainer = tw.div`
grid
grid-cols-1 
md:grid-cols-2
mt-3
w-[95%] 
gap-3
mx-auto
`;

function App(): JSX.Element {

  const [todo, setTodo] = useState(''); 

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodo('')
  }

  return (
    <AppContainer>
      <Heading>Taskify</Heading>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAddTodo={handleAddTodo}
      />
      <TaskListContainer>
        <TasksList variant='active' />
        <TasksList variant='completed' />
      </TaskListContainer>
    </AppContainer>
  );
}

export default App;
