import { createContext } from "react";
import Todo, { TODOACTION } from "../model";

interface contextType {
  todoList: Todo[];
  dispatchTodo: React.Dispatch<TODOACTION>;
}

export const TodoContext = createContext<contextType>({
  todoList: [],
  dispatchTodo: () => {},
});
