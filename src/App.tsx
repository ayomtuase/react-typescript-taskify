import React, { useReducer, useState } from "react";
import tw from "twin.macro";
import InputField from "./components/InputField";
import TasksList from "./components/TasksList";
import { TodoContext } from "./context";
import Todo, { TODOACTION } from "./model";

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

const initialTodoList: Todo[] = [];

function todoReducer(state: typeof initialTodoList, action: TODOACTION): Todo[] {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case "edit":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.todo }
          : todo
      );
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
    case "completed":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: true } : todo
      );
    default:
      throw new Error("Invalid action type");
  }
}

function App(): JSX.Element {
  const [todo, setTodo] = useState("");

  const [todoList, dispatchTodo] = useReducer(todoReducer, initialTodoList);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatchTodo({ type: "add", payload: todo });
    setTodo("");
  };

  return (
    <TodoContext.Provider value={{todoList, dispatchTodo}}>
      <AppContainer>
        <Heading>Taskify</Heading>
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleAddTodo={handleAddTodo}
        />
        <TaskListContainer>
          {["active", "completed"].map((taskType) => (
            <TasksList
              key={taskType}
              variant={taskType as "active" | "completed"}
              tasksList={
                taskType === "active"
                  ? todoList.filter((todo) => !todo.isDone)
                  : taskType === "completed"
                  ? todoList.filter((todo) => todo.isDone)
                  : []
              }
            />
          ))}
        </TaskListContainer>
      </AppContainer>
    </TodoContext.Provider>
  );
}

export default App;
