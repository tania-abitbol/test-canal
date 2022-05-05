import { FC } from "react";
import styled from "styled-components";

import { theme } from "style/theme";

const TitleWrapper = styled.h2`
  text-align: center;
  color: ${theme.color.grey.light};
  font-weight: ${theme.font.weight.bold};
  padding: ${theme.space.medium};
`;

type TitlePropsType = {
  title: string;
};

export const Title: FC<TitlePropsType> = (props) => (
  <TitleWrapper>{props.title}</TitleWrapper>
);
