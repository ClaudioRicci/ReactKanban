import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../themeVariables";

export const Button = styled.button`
  background: #3aa03a;
  border: 0.1rem ${colors.black} solid;
  border-radius: 1rem;
  color: ${colors.black}
  display: block;
  font: 900 1.4em/2rem ${fonts.paragraph};
  margin: 0 auto 2rem;
  outline: none;
  padding: 1rem;
  :hover {
    border: 0.1rem #f9b600 solid;
    color: ${colors.white};
  }
`;
