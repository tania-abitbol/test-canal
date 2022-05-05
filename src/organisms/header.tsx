import { FC } from "react";
import styled from "styled-components";

import { theme } from "style/theme";

import { ItemsMenu } from "molecules/items-menu";

import Logo from "assets/images/mycanal-logo.png";

const HeaderWrapper = styled.div`
  background-color: ${theme.color.grey.dark};
  display: flex;
  & img {
    padding: ${theme.space.small};
    max-width: 175px;
    object-fit: contain;
  }
`;

type ListGenreType = {
  listGenre: [];
};

export const Header: FC<ListGenreType> = (props) => {
  return (
    <HeaderWrapper>
      <img src={Logo} alt="logo mycanal" />
      <ItemsMenu genres={props.listGenre} />
    </HeaderWrapper>
  );
};
