import styled from "styled-components";
import { ItemMenu } from "../atoms/item-menu";

const ItemsMenuWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

type genresType = {
  genres: [];
};

export const ItemsMenu = ({ genres }: genresType) => (
  <ItemsMenuWrapper>
    {genres.map((genre: { name: string; id: number }) => {
      return <ItemMenu key={genre.id} text={genre.name}></ItemMenu>;
    })}
  </ItemsMenuWrapper>
);
