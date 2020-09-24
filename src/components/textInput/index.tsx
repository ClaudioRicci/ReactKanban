import React from "react";
import "./styles/textInput.css";
import { TextInputTag } from "../domElements";

interface ITextInputProps {}

const TextInput: React.SFC<ITextInputProps> = props => {
  return (
    <>
      <TextInputTag />
    </>
  );
};

export default TextInput;
