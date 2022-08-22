import { useState } from 'react';

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
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="query" onChange={handleChange} value={query} />
      <button type="submit">Search</button>
    </form>
  );
};
