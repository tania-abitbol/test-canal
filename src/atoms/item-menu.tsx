import styled from "styled-components";
import { theme } from "../style/theme";

const ItemWrapper = styled.div`
  font-weight: ${theme.font.weight.bold};
  margin: ${theme.space.base};
  &:hover {
    color: ${theme.color.primary.base};
  }
`;

type ItemMenuPropsType = {
  text: string;
};

export const ItemMenu = ({ text }: ItemMenuPropsType) => (
  <ItemWrapper>{text}</ItemWrapper>
);
