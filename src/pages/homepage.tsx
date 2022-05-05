import { useContext, useEffect, useState, FC } from "react";

import { GenreContext } from "context/genre";

import { Header } from "organisms/header";
import { List } from "organisms/list";

import { getList } from "services/list";
import { getThemes } from "services/theme";

export const Homepage: FC = () => {
  const [genres, setGenres] = useState<[]>([]);
  const [listItems, setListItems] = useState<[]>([]);

  const context = useContext(GenreContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getThemes();
      setGenres(response.genres);
    };
    fetchData();
  }, [setGenres]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getList(context.currentGenre.id);
      setListItems(response.results);
    };
    fetchData();
  }, [setListItems, context]);

  return (
    <>
      <Header listGenre={genres} />
      <List list={listItems} />
    </>
  );
};
