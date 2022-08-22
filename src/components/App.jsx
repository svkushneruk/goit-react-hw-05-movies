import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomeView } from 'views/HomeView/HomeView';
import { MoviesView } from 'views/MoviesView/MoviesView';

// import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="movies" element={<MoviesView />}>
            {/* <Route path=":movieId" element={<MovieInfo />} /> */}
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
