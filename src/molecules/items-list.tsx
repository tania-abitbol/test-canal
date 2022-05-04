import styled from "styled-components";

import { theme } from "style/theme";

import { ItemList } from "atoms/item-list";

const ItemsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: ${theme.color.black};
`;

type ItemsListType = {
  list: [];
};

type ItemsListPropsType = {
  title: string;
  id: number;
  poster_path: string;
};

export const ItemsList = ({ list }: ItemsListType) => (
  <ItemsListWrapper>
    {list.map((item: ItemsListPropsType, index) => {
      return (
        <ItemList
          key={index}
          id={item.id}
          title={item.title}
          posterPath={item.poster_path}
        />
      );
    })}
  </ItemsListWrapper>
);
