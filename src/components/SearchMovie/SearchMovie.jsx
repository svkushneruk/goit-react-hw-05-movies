import { useState } from 'react';
import {
  SearchForm,
  SearchInput,
  SearchBtn,
} from 'components/SearchMovie/SearchMovie.styled';
import * as API from 'services/MovieAPI';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { TrandingList, MovieLink } from 'views/HomeView/HomeView.styled';

export const SearchMovie = () => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [searchList, setSearchList] = useState(null);
  const keyword = searchQuery.get('query') ?? '';

  const handleFormSubmit = e => {
    e.preventDefault();
    setSearchQuery({ query: e.target.query.value });
  };

  useEffect(() => {
    if (keyword.trim() === '') {
      return;
    }
    API.getMoviesByKeyword(keyword).then(setSearchList);
  }, [keyword]);

  return (
    <div>
      <SearchForm onSubmit={handleFormSubmit}>
        <SearchInput type="text" name="query" />
        <SearchBtn type="submit">Search</SearchBtn>
      </SearchForm>
      {searchList && keyword && (
        <TrandingList>
          {searchList.map(movie => {
            return (
              <li key={movie.id}>
                <MovieLink to={`/movies/${movie.id}`}>{movie.title}</MovieLink>
              </li>
            );
          })}
        </TrandingList>
      )}
    </div>
  );
};
