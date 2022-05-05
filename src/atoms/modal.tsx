import { useContext, useEffect, useState } from "react";
import { FC } from "react";
import styled from "styled-components";

import { theme } from "style/theme";

import { getMovie } from "services/movie";
import { GenreContext } from "context/genre";

import Cross from "assets/images/cross.png";

const ModalWrapper = styled.div`
  padding: ${theme.space.medium};
  background-color: ${theme.color.grey.dark};
  color: ${theme.color.white};
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  & > img {
    max-width: 30px;
  }
`;

const ModalDescription = styled.div`
  p {
    margin: ${theme.space.xs};
    font-weight: ${theme.font.weight.bold};
    span {
      color: ${theme.color.primary.light};
      font-weight: ${theme.font.weight.normal};
    }
  }
`;

const ModalRating = styled.div`
  width: 250px;
  background-color: ${theme.color.primary.dark};
  border-radius: ${theme.radius.large};
  padding: ${theme.space.small};
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
  runtime: number;
};

const convertMinsToHrs = (mins: number) => {
  const m = mins % 60;
  const h = (mins - m) / 60;
  return `${h}h${m}`;
};

export const Modal: FC<ModalType> = (props) => {
  const [movie, setMovie] = useState<ModalPropsType>({
    overview: "",
    release_date: "",
    vote_average: 0,
    vote_count: 0,
    adult: false,
    runtime: 0,
  });

  const context = useContext(GenreContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMovie(props.id);
      setMovie(response);
    };

    fetchData();
  }, [setMovie, props.id]);

  return (
    <ModalWrapper>
      <img src={Cross} alt="croix" />
      <ModalDescription>
        <p>
          Description: <span>{movie.overview}</span>
        </p>
        <p>
          Date de sortie: <span>{movie.release_date}</span>
        </p>
        {movie.adult && <p>Contenu adult only</p>}
        <p>
          Genre: <span>{context.currentGenre.name}</span>
        </p>
        <p>
          Temps: <span>{convertMinsToHrs(movie.runtime)} min</span>
        </p>
        <ModalRating>
          <p>
            Note du public : <span>{movie.vote_average}</span>
          </p>
          <p>
            Nombre de votes: <span>{movie.vote_count}</span>
          </p>
        </ModalRating>
      </ModalDescription>
    </ModalWrapper>
  );
};
