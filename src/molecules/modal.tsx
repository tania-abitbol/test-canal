import { useEffect, useState } from "react";
import styled from "styled-components";

import { getMovie } from "services/movie";

const ModalWrapper = styled.div`
  color: white;
`;

type ModalType = {
  id: number;
};

type ModalPropsType = {
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  genres: [];
  runtime: number;
};

export const Modal = ({ id }: ModalType) => {
  const [movie, setMovie] = useState<ModalPropsType>({
    overview: "",
    release_date: "",
    vote_average: 0,
    vote_count: 0,
    adult: false,
    genres: [],
    runtime: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMovie(id);
      setMovie(response);
    };

    fetchData();
  }, [setMovie, id]);

  return (
    <ModalWrapper>
      {movie !== null ? (
        <>
          <p>Description :{movie.overview}</p>
          <p>Date de sortie :{movie.release_date}</p>
          <p>Note du public :{movie.vote_average}</p>
          <p>Nombre de votes:{movie.vote_count}</p>
          {movie.adult && <p>contenu adult only</p>}
          {movie.genres !== [] &&
            movie.genres.map((genre: { name: string }) => (
              <div>{genre.name}</div>
            ))}
          <p>Temps :{movie.runtime}</p>
        </>
      ) : (
        <div>runing</div>
      )}
    </ModalWrapper>
  );
};
