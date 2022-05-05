import { FC, useContext } from "react";
import styled from "styled-components";

import { theme } from "style/theme";

import { GenreContext } from "context/genre";

import { ItemList } from "molecules/item-list";
import { Title } from "atoms/title";

const ItemsListWrapper = styled.div`
  background-color: ${theme.color.black};
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

type ItemsListType = {
  list: [];
};

type ItemsListPropsType = {
  title: string;
  id: number;
  poster_path: string;
};

export const List: FC<ItemsListType> = (props) => {
  const context = useContext(GenreContext);

  return (
    <ItemsListWrapper>
      <Title title={context.currentGenre.name} />
      <ItemsWrapper>
        {props.list.map((item: ItemsListPropsType, index) => {
          return (
            <ItemList
              key={index}
              id={item.id}
              title={item.title}
              posterPath={item.poster_path}
            />
          );
        })}
      </ItemsWrapper>
    </ItemsListWrapper>
  );
};
