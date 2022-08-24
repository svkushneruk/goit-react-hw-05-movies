import { useEffect, useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  Outlet,
  useParams,
} from 'react-router-dom';
import { BtnGoBack } from 'components/BtnGoBack/BtnGoBack';
import * as API from 'services/MovieAPI';
import { FilmCard } from 'components/FilmCard/FilmCard';
import { Wrapper } from './MovieDetailsView.styled';

export const MovieDetailsView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    API.getMovieDetails(movieId).then(setFilm);
  }, [movieId]);

  const goBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <>
      {film && (
        <Wrapper>
          <BtnGoBack onClick={goBack} />

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
        </Wrapper>
      )}
    </>
  );
};
