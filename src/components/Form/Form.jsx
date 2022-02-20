import styled from "styled-components";
import { useState } from "react";

import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";
import commentsApi from "../../services/api";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    max-width: 557px;
  }
`;

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      comment: comment,
    };
    const data = await commentsApi(user);
    if (data instanceof Error) {
      alert("Oooops, something went wrong. Please try again later.");
    } else {
      alert("Thank you for your comment. We will get in touch with you soon.");
      setName("");
      setEmail("");
      setComment("");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        value={name}
        required
        placeholder="Your name*"
        minLength="2"
        pattern="[A-Za-z]{1,32}"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Input
        value={email}
        required
        type="email"
        placeholder="Your email*"
        pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextArea
        value={comment}
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
