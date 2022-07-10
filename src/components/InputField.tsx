import React from "react";
import { Form, Input, Button } from "./Styles";

const InputField = (): JSX.Element => {
  return (
    <Form>
      <Input placeholder="Enter your task" />
      <Button type="submit">GO</Button>
    </Form>
  );
};

export default InputField;
