```tsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Credit {
  // Define fields for Credit based on your data structure
}

interface MovieDetails {
  // Define fields for MovieDetails based on your data structure
}

interface MovieDetailsState {
  status: 'loading' | 'success' | 'error';
  movieId: number;
  credits: Credit[];
  details: MovieDetails;
  cast: any[]; // Define specifically if possible
  crew: any[]; // Define specifically if possible
}

const initialState: MovieDetailsState = {
  status: "loading",
  movieId: 0,
  credits: [],
  details: {},
  cast: [],
  crew: [],
};

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {
    fetchMovieDetails: (state) => {
      state.status = "loading";
    },
    fetchMovieDetailsSuccess: (state, action: PayloadAction<{ details: MovieDetails; credits: Credit[] }>) => {
      state.status = "success";
      state.details = action.payload.details;
      state.credits = action.payload.credits;
    },
    fetchMovieDetailsError: (state) => {
      state.status = "error";
    },
    getMovieId: (state, action: PayloadAction<number>) => {
      console.log("movieId payload:", action.payload);
      state.movieId = action.payload;
    },
  },
});

export const {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  getMovieId,
} = movieDetailsSlice.actions;

export const selectMovieState = (state: { movieDetails: MovieDetailsState }) => state.movieDetails;
export const selectStatus = (state: { movieDetails: MovieDetailsState }) => selectMovieState(state).status;
export const selectDetails = (state: { movieDetails: MovieDetailsState }) => selectMovieState(state).details;
export const selectCredits = (state: { movieDetails: MovieDetailsState }) => selectMovieState(state).credits;
export const selectMovieId = (state: { movieDetails: MovieDetailsState }) => selectMovieState(state).movieId;

export default movieDetailsSlice.reducer;
```