export const loadMovies = () => ({
    type: 'LOAD_MOVIES',
  });
  export const moviesLoaded = data => ({
    type: 'MOVIES_LOADED',
    payload: {
      data,
    },
  });