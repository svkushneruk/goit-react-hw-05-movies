import React from 'react';
import {
  CardWrapper,
  CardPoster,
  CardTitle,
  CardSubTitle,
  CardText,
} from './FilmCard.styled';

export const FilmCard = ({ film }) => {
  const getDate = str => str.slice(0, 4);
  const getGenres = genresArray => {
    return genresArray.map(obj => obj.name).join(' ');
  };

  return (
    <CardWrapper>
      <CardPoster
        src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}
        alt={film.title}
      />
      <div>
        <CardTitle>
          {film.title} <span>({getDate(film.release_date)})</span>
        </CardTitle>
        <CardText>Users score: {film.vote_average}</CardText>
        <CardSubTitle>Overview</CardSubTitle>
        <CardText>{film.overview}</CardText>
        <CardSubTitle>Genres</CardSubTitle>
        <p>{getGenres(film.genres)}</p>
      </div>
    </CardWrapper>
  );
};
