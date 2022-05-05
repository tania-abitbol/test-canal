import { FC } from "react";
import styled from "styled-components";

import { theme } from "style/theme";

const ButtonWrapper = styled.button`
  background-color: ${theme.color.grey.base};
  border-radius: ${theme.radius.base};
  border: none;
  cursor: pointer;

  & > p {
    font-size: ${theme.font.size.small};
    color: ${theme.color.black};
    padding: ${theme.space.xs};
    font-weight: ${theme.font.weight.bold};
  }

  &:hover {
    background-color: ${theme.color.primary.light};
  }
`;

type ButtonPropsType = {
  text: string;
};

export const Button: FC<ButtonPropsType> = (props) => {
  return (
    <ButtonWrapper>
      <p>{props.text}</p>
    </ButtonWrapper>
  );
};
