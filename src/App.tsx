import { GlobalStyle } from "./style";
import { Homepage } from "./pages/homepage";
import { GenreProvider } from "./context/genre";

export const App = () => {
  return (
    <>
      <GenreProvider>
        <GlobalStyle />
        <Homepage />
      </GenreProvider>
    </>
  );
};
