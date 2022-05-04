import { useState } from "react";
import styled from "styled-components";

import { theme } from "style/theme";

import { Button } from "atoms/button";

import { Modal } from "molecules/modal";

const ItemWrapper = styled.div`
  cursor: pointer;
  margin: ${theme.space.base};
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 175px;
    height: 200px;
    object-fit: cover;
  }
  p {
    padding-top: 10px;
    width: 150px;
    text-align: center;
    color: ${theme.color.grey.light};
    font-weight: ${theme.font.weight.bold};
  }
`;

type ItemListPropsType = {
  posterPath: string;
  title: string;
  id: number;
};

export const ItemList = ({ posterPath, title, id }: ItemListPropsType) => {
  const [showModal, setshowModal] = useState<boolean>(false);

  return (
    <ItemWrapper onClick={() => setshowModal(!showModal)}>
      <img
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        alt="poster"
      />
      <p>{title}</p>
      <Button text="En savoir +" />
      {showModal && <Modal id={id} />}
    </ItemWrapper>
  );
};
