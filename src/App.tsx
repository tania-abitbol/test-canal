import { Header } from "./organisme/header";
import { List } from "./organisme/list";
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
