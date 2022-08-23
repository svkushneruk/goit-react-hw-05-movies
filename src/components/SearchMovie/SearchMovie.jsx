import { useState } from 'react';
import {
  SearchForm,
  SearchInput,
  SearchBtn,
} from 'components/SearchMovie/SearchMovie.styled';
import * as API from 'services/MovieAPI';

export const SearchMovie = () => {
  const [query, setQuery] = useState('');
  const [searchList, setSearchList] = useState(null);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return;
    }

    API.getMoviesByKeyword(query).then(setSearchList);
  };
  return (
    <SearchForm onSubmit={handleFormSubmit}>
      <SearchInput
        type="text"
        name="query"
        onChange={handleChange}
        value={query}
      />
      <SearchBtn type="submit">Search</SearchBtn>
    </SearchForm>
  );
};
