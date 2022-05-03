import styled from "styled-components";
import { theme } from "../style/theme";

const ItemWrapper = styled.div`
  margin: ${theme.space.base};
  img {
    width: 150px;
  }
  p {
    max-width: 150px;
    text-align: center;
  }
`;

type ItemListPropsType = {
  posterPath: string;
  title: string;
};

export const ItemList = ({ posterPath, title }: ItemListPropsType) => (
  <ItemWrapper>
    <img
      src={`https://image.tmdb.org/t/p/original/${posterPath}`}
      alt="image description"
    />
    <p>{title}</p>
  </ItemWrapper>
);
