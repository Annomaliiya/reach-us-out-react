import styled from "styled-components";
import { useState } from "react";

import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";

const StyledForm = styled.form`
  max-width: 557px;
  display: flex;
  flex-direction: column;
`;

const Form = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [comment, setComment] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      comment: comment,
    };
    console.log(user);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        required
        placeholder="Your name*"
        minLength="2"
        pattern="[A-Za-z]{1,32}"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Input
        required
        type="email"
        placeholder="Your email*"
        pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextArea
        required
        minLength="20"
        placeholder="Your message*"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <Button type="submit">Send message</Button>
    </StyledForm>
  );
};

export default Form;
