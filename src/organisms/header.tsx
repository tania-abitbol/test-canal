import styled from "styled-components";

import Logo from "assets/images/mycanal-logo.png";

import { theme } from "style/theme";

import { ItemsMenu } from "molecules/items-menu";

const HeaderWrapper = styled.div`
  background-color: ${theme.color.grey.dark};
  display: flex;
  & img {
    padding: 20px;
    max-width: 175px;
    object-fit: contain;
  }
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
