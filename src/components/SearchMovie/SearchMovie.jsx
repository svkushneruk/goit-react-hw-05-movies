import { useState } from 'react';
import {
  SearchForm,
  SearchInput,
  SearchBtn,
} from 'components/SearchMovie/SearchMovie.styled';

export const SearchMovie = () => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return;
    }

    //   onSubmit(query);
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
