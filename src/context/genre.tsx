import React, { useState } from "react";

type GenreContextType = {
  setGenre: (genre: number) => void;
  currentGenre: number;
};

export const GenreContext = React.createContext<GenreContextType>({
  setGenre: () => {},
  currentGenre: 27,
});

export const GenreProvider = (props) => {
  const [currentGenre, setcurrentGenre] = useState<number>(27);

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
