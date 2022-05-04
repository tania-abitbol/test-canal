import React, { useState } from "react";

type GenreContextType = {
  setGenre: (genre: number) => void;
  currentGenre: number;
};

export const GenreContext = React.createContext<GenreContextType>({
  setGenre: () => {},
  currentGenre: null,
});

export const GenreProvider = (props) => {
  const [currentGenre, setcurrentGenre] = useState<number>(null);

  return (
    <GenreContext.Provider
      value={{
        setGenre: (genre: number) => {
          setcurrentGenre(genre);
        },
        currentGenre,
      }}
    >
      {props.children}
    </GenreContext.Provider>
  );
};
