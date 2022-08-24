import { useState } from 'react';
import * as API from 'services/MovieAPI';
import { useEffect } from 'react';

import { Title, TrandingList, MovieLink } from './HomeView.styled';
import { useLocation } from 'react-router-dom';

const HomeView = () => {
  const location = useLocation();
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
                <MovieLink
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                >
                  {movie.title}
                </MovieLink>
              </li>
            );
          })}
      </TrandingList>
    </div>
  );
};

export default HomeView;
