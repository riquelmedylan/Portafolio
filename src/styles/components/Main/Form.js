import styled from "styled-components";

export const InputForm = styled.input`
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  height: 2.2em;
  margin-bottom: 10px;
  outline: none;
  padding: 0 12px;
  width: 100%;
`;

export const TextareaForm = styled.textarea`
  font-size: 18px;
  font-weight: 500;
  outline: none;
  padding: 12px;
  resize: none;
  width: 100%;
`;

export const ButtonForm = styled.button`
  border: none;
  border-radius: 7px;
  cursor: pointer;
  display: block;
  font-weight: 700;
  margin: 10px auto 0 auto;
  padding: 5px 0;
  outline: none;
  opacity: 0.6;
  width: 10rem;
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 1;
  }
`;
