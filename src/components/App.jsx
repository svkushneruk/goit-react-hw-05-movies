import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomeView } from 'views/HomeView/HomeView';
import { MoviesView } from 'views/MoviesView/MoviesView';
import { MovieDetailsView } from 'views/MovieDetailsView/MovieDetailsView';
import { SearchMovie } from './SearchMovie/SearchMovie';

// import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="movies" element={<MoviesView />}>
            <Route index element={<SearchMovie />}></Route>
            <Route path=":movieId" element={<MovieDetailsView />}>
              <Route path="cast" element={<div>cast</div>} />
              <Route path="reviews" element={<div>reviews</div>} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
