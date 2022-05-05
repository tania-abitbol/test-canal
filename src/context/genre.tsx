import React, { useState } from "react";

type GenreType = { id: number; name: string };

type GenreContextType = {
  setGenre: (genre: GenreType) => void;
  currentGenre: { id: number; name: string };
};

export const GenreContext = React.createContext<GenreContextType>({
  setGenre: () => {},
  currentGenre: { id: 27, name: "Horreur" },
});

export const GenreProvider = (props) => {
  const [currentGenre, setcurrentGenre] = useState<GenreType>({
    id: 16,
    name: "Animation",
  });

  return (
    <GenreContext.Provider
      value={{
        setGenre: (genre: GenreType) => {
          setcurrentGenre(genre);
        },
        currentGenre,
      }}
    >
      {props.children}
    </GenreContext.Provider>
  );
};
