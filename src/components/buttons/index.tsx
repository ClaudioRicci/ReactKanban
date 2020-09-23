import styled from "styled-components";
import { colors, fonts } from "../../themeVariables";

export const Button = styled.button`
  background: #3aa03a;
  border: 0.1rem ${colors.black} solid;
  border-radius: 1rem;
  color: ${colors.black};
  cursor: pointer;
  display: block;
  font: 900 1.4em/2rem ${fonts.paragraph};
  margin: 0 auto 2rem;
  outline: none;
  padding: 1rem;
  :hover {
    border: 0.1rem #f9b600 solid;
    color: ${colors.white};
    opacity: 0.85;
    transition: 0.3s;
  }
`;

export const AddButton = styled.button`
  background: #98fb98;
  border: 0.1rem ${colors.black} solid;
  border-radius: 1rem;
  color: ${colors.black};
  cursor: pointer;
  display: block;
  font: 900 1.4em/2rem ${fonts.paragraph};
  margin: 0 auto 2rem;
  outline: none;
  padding: 1rem;
  :hover {
    border: 0.1rem #f9b600 solid;
    color: ${colors.white};
    opacity: 0.85;
    transition: 0.3s;
  }
`;

export const CancelButton = styled.button`
  background: #ff6347;
  border: 0.1rem ${colors.black} solid;
  border-radius: 1rem;
  color: ${colors.black};
  cursor: pointer;
  display: block;
  font: 900 1.4em/2rem ${fonts.paragraph};
  margin: 0 auto 2rem;
  outline: none;
  padding: 1rem;
  :hover {
    border: 0.1rem #f9b600 solid;
    color: ${colors.white};
    opacity: 0.85;
    transition: 0.3s;
  }
`;
