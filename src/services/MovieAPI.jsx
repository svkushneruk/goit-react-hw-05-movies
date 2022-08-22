const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = `d03daf64cadea6a78f3d59fc7a9564fc`;

export const getTrendMovies = async () => {
  return await fetch(`${BASE_URL}/trending/all/day?api_key=${KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(response => response.results);
};

export const getMoviesByKeyword = async () => {
  return await fetch(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(response => response.results);
};

export const getMovieDetails = async movie_id => {
  return await fetch(
    `${BASE_URL}/movie/${movie_id}?api_key=${KEY}&language=en-US`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(response => response.results);
};

export const getCredits = async movie_id => {
  return await fetch(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${KEY}&language=en-US`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(response => response.results);
};

export const getReviews = async movie_id => {
  return await fetch(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${KEY}&language=en-US&page=1`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(response => response.results);
};
