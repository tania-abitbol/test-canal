import { useContext } from "react";
import styled from "styled-components";

import { GenreContext } from "context/genre";

import { theme } from "style/theme";

const ItemWrapper = styled.div`
  font-weight: ${theme.font.weight.bold};
  padding: ${theme.space.base};
  color: ${theme.color.grey.light};
  cursor: pointer;
  &:hover {
    color: ${theme.color.primary.base};
  }
`;

type ItemMenuPropsType = {
  genreText: string;
  genreId: number;
};

export const ItemMenu = ({ genreText, genreId }: ItemMenuPropsType) => {
  const context = useContext(GenreContext);

  return (
    <ItemWrapper
      onClick={() => {
        context.setGenre(genreId);
      }}
    >
      {genreText}
    </ItemWrapper>
  );
};
