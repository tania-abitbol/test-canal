import styled from "styled-components";

import { theme } from "style/theme";

const ButtonWrapper = styled.button`
  padding: ${theme.space.base};
  backgroud-color: ${theme.color.grey.light};
  cursor: pointer;
  &:hover {
    backgroud-color: ${theme.color.primary.light};
  }
`;

type ButtonPropsType = {
  text: string;
};

export const Button = ({ text }: ButtonPropsType) => {
  return <ButtonWrapper>{text}</ButtonWrapper>;
};
