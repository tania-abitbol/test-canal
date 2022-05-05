import { FC, useState } from "react";
import styled from "styled-components";

import { theme } from "style/theme";

import { Button } from "atoms/button";
import { MovieTitle } from "atoms/movie-title";

import { Modal } from "atoms/modal";

const ItemWrapper = styled.div`
  cursor: pointer;
  margin: ${theme.space.base};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 200px;
  box-shadow: ${theme.shadow.base};

  img {
    width: 100%;
    object-fit: cover;
  }
`;

type ItemListPropsType = {
  posterPath: string;
  title: string;
  id: number;
};

export const ItemList: FC<ItemListPropsType> = (props) => {
  const [showModal, setshowModal] = useState<boolean>(false);

  return (
    <ItemWrapper onClick={() => setshowModal(!showModal)}>
      <img
        src={`https://image.tmdb.org/t/p/original/${props.posterPath}`}
        alt="poster"
      />
      <MovieTitle title={props.title} />
      <Button text="En savoir +" />
      {showModal && <Modal id={props.id} />}
    </ItemWrapper>
  );
};
