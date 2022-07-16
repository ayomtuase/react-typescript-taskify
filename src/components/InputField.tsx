import React, { useRef } from 'react'
import tw, { styled } from "twin.macro";

const Form = tw.form`
  flex
  relative 
  w-[95%]
  mx-auto
  items-center 
  mt-6   
`;

const Input = styled.input`
  ${tw`
  rounded-[50px] 
  shadow-[inset 0px 0px 5px rgba(0,0,0,1)]
  focus:shadow-[0 0 10px 9999px rgba(0, 0, 0, 0.5)]
  focus:outline-none
  max-w-full
  flex-grow
  pl-8 
  py-5  
  text-2xl  
  `}
`;
Input.defaultProps = { type: "text" };

const Button = tw.button`
  absolute
  rounded-full
  bg-blue
  text-white
  m-3
  right-0
  h-[50px]
  w-[50px]
  shadow-[0 0 10px black]
  hover:bg-[#388ae2]
  duration-200  
`;

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void,
}

const InputField = ({ todo, setTodo, handleAddTodo }: Props): JSX.Element => {

  const inputRef = useRef<HTMLInputElement>(null!);

  return (
    <Form onSubmit={e => {
      handleAddTodo(e)
      inputRef.current.blur()
    }}>
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
