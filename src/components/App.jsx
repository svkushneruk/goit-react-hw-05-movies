import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { SearchMovie } from './SearchMovie/SearchMovie';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
const HomeView = lazy(() => import('views/HomeView/HomeView'));
const MoviesView = lazy(() => import('views/MoviesView/MoviesView'));
const MovieDetailsView = lazy(() =>
  import('views/MovieDetailsView/MovieDetailsView')
);
const NotFoundView = lazy(() => import('views/NotFoundView/NotFoundView'));

export const App = () => {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route path="movies" element={<MoviesView />}>
              <Route index element={<SearchMovie />}></Route>
            </Route>
            <Route path="movies/:movieId" element={<MovieDetailsView />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
