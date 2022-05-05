import { FC } from "react";
import styled from "styled-components";

import { ItemMenu } from "atoms/item-menu";

const ItemsMenuWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

type ItemsMenuType = {
  genres: [];
};

type ItemsMenuPropsType = {
  name: string;
  id: number;
};

export const ItemsMenu: FC<ItemsMenuType> = (props) => (
  <ItemsMenuWrapper>
    {props.genres.map((genre: ItemsMenuPropsType, index) => {
      return <ItemMenu key={index} genreText={genre.name} genreId={genre.id} />;
    })}
  </ItemsMenuWrapper>
);
