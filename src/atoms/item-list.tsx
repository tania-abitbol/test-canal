import { useState } from "react";
import styled from "styled-components";

import { theme } from "../style/theme";

import { Modal } from "../molecules/modal";

const ItemWrapper = styled.div`
  cursor: pointer;
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

      {showModal && <Modal id={id} />}
    </ItemWrapper>
  );
};
