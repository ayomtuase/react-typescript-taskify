import tw from "twin.macro";
import styled from "@emotion/styled";

export const Form = tw.form`
  flex
  relative 
  w-[95%]
  mx-auto
  items-center 
  mt-6   
`;

export const Input = styled.input`
  ${tw`h-[74px] rounded-[50px] 
  flex-grow px-5 text-2xl
  `}  
`
Input.defaultProps = { type: 'text' }

export const Button = tw.button`
  absolute
  rounded-full
  bg-blue
  text-white
  m-3
  right-0
  h-[50px]
  w-[50px]
  hover:bg-[#388ae2]
`