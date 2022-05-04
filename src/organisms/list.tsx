import styled from "styled-components";

import { ItemsList } from "../molecules/items-list";

const ListWrapper = styled.div`
  display: flex;
`;

type ListItemsType = {
  listItems: [];
};

export const List = ({ listItems }: ListItemsType) => {
  return (
    <ListWrapper>
      <ItemsList list={listItems} />
    </ListWrapper>
  );
};
