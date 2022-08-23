import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet, useParams } from 'react-router-dom';
import * as API from 'services/MovieAPI';
import { FilmCard } from 'components/FilmCard/FilmCard';

export const MovieDetailsView = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    API.getMovieDetails(movieId).then(setFilm);
  }, [movieId]);

  return (
    <>
      {film && (
        <>
          <FilmCard film={film} />
          <div>
            <h2>Additional inforamation</h2>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};
