import { useEffect, useState } from "react";
import styled from "styled-components";

import { ItemsMenu } from "../molecules/items-menu";
import { getThemes } from "../services/theme";

// import Logo from "../images/logo-canal.png";

const ItemsMenuWrapper = styled.div`
  display: flex;
`;

export const Header = () => {
  const [themes, setThemes] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getThemes();
      setThemes(response.genres);
    };

    fetchData();
  }, [setThemes]);
  return (
    <ItemsMenuWrapper>
      {/* <img src={Logo} alt="logo mycanal" /> */}
      <ItemsMenu genres={themes} />
    </ItemsMenuWrapper>
  );
};
