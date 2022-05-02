import { useEffect, useState } from "react";
import styled from "styled-components";

import { getList } from "../services/list";

const ItemsMenuWrapper = styled.div`
  display: flex;
`;

export const List = () => {
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getList(27);
      setList(response.results);
    };

    fetchData();
  }, [setList]);
  return (
    <ItemsMenuWrapper>
      <div>
        {list.map((movie: any) => {
          return <div>{movie.original_title}</div>;
        })}
      </div>
    </ItemsMenuWrapper>
  );
};
