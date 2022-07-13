import { Form, Input, Button } from "./Styles";

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleTodoSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  inputRef: React.MutableRefObject<HTMLInputElement>
}

const InputField = ({todo, setTodo, handleTodoSubmit, inputRef}: Props): JSX.Element => {

  
  return (
    <Form onSubmit={e => handleTodoSubmit(e)}>
      <Input placeholder="Enter your task"
        value={todo}
        onChange={e => setTodo(e.target.value)}
        ref={inputRef}        
      />
      <Button type="submit" className="">GO</Button>
    </Form>
  );
};

export default InputField;
