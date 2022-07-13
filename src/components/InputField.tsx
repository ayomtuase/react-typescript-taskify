import { Form, Input, Button } from "./Styles";

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void,
  inputRef: React.MutableRefObject<HTMLInputElement>
}

const InputField = ({ todo, setTodo, handleAddTodo, inputRef }: Props): JSX.Element => {

  return (
    <Form onSubmit={e => handleAddTodo(e)}>
      <Input placeholder="Enter your task"
        value={todo}
        onChange={e => setTodo(e.target.value)}
        ref={inputRef}
      />
      <Button type="submit" className="active:scale-75">GO</Button>
    </Form>
  );
};

export default InputField;
