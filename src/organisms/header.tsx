import { useEffect, useState } from "react";
import styled from "styled-components";

import { ItemsMenu } from "../molecules/items-menu";
import { getThemes } from "../services/theme";

// import Logo from "../assets/images/logo-canal.png";

const HeaderWrapper = styled.div`
  display: flex;
`;

type HeaderType = [];

export const Header = () => {
  const [themes, setThemes] = useState<HeaderType>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getThemes();
      setThemes(response.genres);
    };

    fetchData();
  }, [setThemes]);
  return (
    <HeaderWrapper>
      {/* <img src={Logo} alt="logo mycanal" /> */}
      <ItemsMenu genres={themes} />
    </HeaderWrapper>
  );
};
