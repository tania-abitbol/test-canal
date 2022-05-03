import { useEffect, useState } from "react";
import styled from "styled-components";

import { ItemsList } from "../molecules/items-list";
import { getList } from "../services/list";

const ListWrapper = styled.div`
  display: flex;
`;

type ListType = [];

export const List = () => {
  const [list, setList] = useState<ListType>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getList(27);
      setList(response.results);
    };

    fetchData();
  }, [setList]);

  return (
    <ListWrapper>
      <ItemsList list={list} />
    </ListWrapper>
  );
};
