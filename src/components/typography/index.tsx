import styled from "styled-components";
import { colors, fonts, align } from "../../themeVariables";

export const H1Tag = styled.h1`
  font: 900 2em/2rem ${fonts.header};
  color: ${colors.primary};
  text-align: ${align.center};
`;

export const H2Tag = styled.h2`
  font: 900 1.6em/2rem ${fonts.header};
  color: ${colors.primary};
  text-align: ${align.center};
`;

export const H3Tag = styled.h3`
  font: 900 1.4em/2rem ${fonts.header};
  color: ${colors.secondary};
  line-height: 1rem;
`;

export const H4Tag = styled.h4`
  font: 600 1em/1rem ${fonts.header};
  color: ${colors.black};
  line-height: 1rem;
`;

export const PTag = styled.p`
  font: 400 1em/2rem ${fonts.paragraph};
  color: ${colors.black};
  line-height: 1rem;
`;

export const AnchorTag = styled.a`
  font: 900 1.2em/2rem ${fonts.paragraph};
  color: ${colors.secondary};
  padding: 8px;
  border-radius: 2px;
  text-decoration: none;
  line-height: 2rem;
`;
