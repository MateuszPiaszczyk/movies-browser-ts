```tsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Genre {
  id: number;
  name: string;
}

interface GenresState {
  genres: Genre[] | null;
  status: "initial" | "loading" | "success" | "error";
}

const initialState: GenresState = {
  genres: [],
  status: "initial",
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    fetchGenres: () => ({
      status: "loading",
      genres: null,
    }),
    fetchGenresSuccess: (state, { payload }: PayloadAction<Genre[]>) => ({
      status: "success",
      genres: payload,
    }),
    fetchGenresError: () => ({
      status: "error",
      genres: null,
    }),
  },
});

export const { fetchGenres, fetchGenresSuccess, fetchGenresError } = genresSlice.actions;

export const selectGenres = (state: { genres: GenresState }) => state.genres.genres;
export const selectGenresStatus = (state: { genres: GenresState }) => state.genres.status;

export default genresSlice.reducer;
```