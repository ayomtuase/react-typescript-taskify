import { FormEvent, useContext, useState } from "react";

import tw, { styled } from "twin.macro";
import { AiFillEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { MdDone } from "react-icons/md";

import Todo from "../model";
import { TodoContext } from "../context";

const Form = styled.form`
  background-image: url(https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?ext=jpg&size=626);
  ${tw`flex rounded-md p-5`}
`;

const TodoComponent = ({ todo }: { todo: Todo }) => {
  const [editable, setEditable] = useState(false);
  const [editTodotext, setEditTodoText] = useState(todo.todo);

  const dispatchTodo = useContext(TodoContext).dispatchTodo;

  const onTodoEditSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatchTodo({
      type: "edit",
      payload: { id: todo.id, todo: editTodotext },
    });
    setEditable(false);
  };

  return (
    <Form onSubmit={onTodoEditSubmit}>
      {editable ? (
        <input
          type="text"
          className="flex-grow mr-4"
          value={editTodotext}
          onChange={(e) => setEditTodoText(e.target.value)}
        />
      ) : (
        <span className="font-cursive flex-grow text-xl">{todo.todo}</span>
      )}
      <span className="inline-flex items-center space-x-4">
        <AiFillEdit
          size="20"
          onClick={() => {
            if (!editable && !todo.isDone) {
              setEditable(!editable);
            }
          }}
        />
        <FaTrash
          size="20"
          onClick={() => dispatchTodo({ type: "delete", payload: todo.id })}
        />
        <MdDone
          size="20"
          onClick={() => dispatchTodo({ type: "completed", payload: todo.id })}
        />
      </span>
    </Form>
  );
};

export default TodoComponent;
