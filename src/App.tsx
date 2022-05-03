import { Header } from "./organisms/header";
import { List } from "./organisms/list";
import { GlobalStyle } from "./style/index";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <List />
    </>
  );
};
