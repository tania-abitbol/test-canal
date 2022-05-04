import styled from "styled-components";

import Logo from "../assets/images/logo.png";

import { ItemsMenu } from "../molecules/items-menu";

const HeaderWrapper = styled.div`
  display: flex;
`;

type ListGenreType = {
  listGenre: [];
};

export const Header = ({ listGenre }: ListGenreType) => {
  return (
    <HeaderWrapper>
      <img src={Logo} alt="logo mycanal" />
      <ItemsMenu genres={listGenre} />
    </HeaderWrapper>
  );
};
