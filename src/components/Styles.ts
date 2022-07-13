import tw, { styled } from "twin.macro";

export const Form = tw.form`
  flex
  relative 
  w-[95%]
  mx-auto
  items-center 
  mt-6   
`;

export const Input = styled.input`
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

export const Button = tw.button`
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
