import { useState } from 'react';
import * as API from 'services/MovieAPI';
import { useEffect } from 'react';

import { Title, TrandingList, MovieLink } from './HomeView.styled';

export const HomeView = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    API.getTrendMovies().then(setMovies);
  }, []);

  return (
    <div>
      <Title>Tranding today</Title>
      <TrandingList>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <MovieLink to={`/movies/${movie.id}`}>{movie.title}</MovieLink>
              </li>
            );
          })}
      </TrandingList>
    </div>
  );
};
