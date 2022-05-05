import { FC } from "react";
import styled from "styled-components";

import { theme } from "style/theme";

const MovieTitleWrapper = styled.p`
  text-align: center;
  color: ${theme.color.grey.light};
  font-weight: ${theme.font.weight.bold};
`;

type MovieTitlePropsType = {
  title: string;
};

export const MovieTitle: FC<MovieTitlePropsType> = (props) => (
  <MovieTitleWrapper>{props.title}</MovieTitleWrapper>
);
