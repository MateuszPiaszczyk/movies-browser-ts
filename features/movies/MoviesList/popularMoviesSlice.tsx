```typescript
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  id: number;
  title: string;
  // Dodaj inne właściwości filmu, jeśli są potrzebne
}

interface Genre {
  id: number;
  name: string;
}

interface MoviesResponse {
  data: {
    results: Movie[];
    total_pages: number;
    total_results: number;
  };
  genres: Genre[];
}

interface PopularMoviesState {
  page: number;
  totalPages: number;
  movies: Movie[];
  genres: Genre[];
  status: "loading" | "success" | "error";
  query: string;
  totalResults: number;
}

const initialState: PopularMoviesState = {
  page: 1,
  totalPages: 0,
  movies: [],
  genres: [],
  status: "loading",
  query: "",
  totalResults: 0,
};

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState,
  reducers: {
    fetchMoviesListSuccess: (
      state,
      { payload }: PayloadAction<MoviesResponse>
    ) => {
      state.status = "loading";
      state.movies = payload.data.results;
      state.genres = payload.genres;
      state.totalPages = payload.data.total_pages > 500 ? 500 : payload.data.total_pages;
      state.status = "success";
      state.totalResults = payload.data.total_results;
    },
    fetchMoviesListError: (state) => {
      state.status = "error";
    },
    goToPage: (state, { payload }: PayloadAction<{ page: number }>) => {
      state.status = "loading";
      state.page = payload.page;
    },
    setQuery: (state, { payload }: PayloadAction<{ query: string }>) => {
      state.query = payload.query;
      state.status = "loading";
    },
  },
});

export const {
  fetchMoviesListSuccess,
  fetchMoviesListError,
  goToPage,
  setQuery,
} = popularMoviesSlice.actions;

export const selectStatePopularMovies = (state: { popularMovies: PopularMoviesState }) => state.popularMovies;
export const selectPopularMovies = (state: { popularMovies: PopularMoviesState }) =>
  selectStatePopularMovies(state).movies;
export const selectGenres = (state: { popularMovies: PopularMoviesState }) => selectStatePopularMovies(state).genres;
export const selectStatus = (state: { popularMovies: PopularMoviesState }) => selectStatePopularMovies(state).status;
export const selectPage = (state: { popularMovies: PopularMoviesState }) => selectStatePopularMovies(state).page;
export const selectTotalPages = (state: { popularMovies: PopularMoviesState }) =>
  selectStatePopularMovies(state).totalPages;
export const selectQuery = (state: { popularMovies: PopularMoviesState }) => selectStatePopularMovies(state).query;
export const selectTotalResults = (state: { popularMovies: PopularMoviesState }) =>
  selectStatePopularMovies(state).totalResults;

export default popularMoviesSlice.reducer;
```