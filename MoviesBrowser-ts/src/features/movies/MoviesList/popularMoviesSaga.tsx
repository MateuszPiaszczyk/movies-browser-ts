```tsx
import { call, select, put, takeLatest } from "redux-saga/effects";
import {
  goToPage,
  fetchMoviesListError,
  fetchMoviesListSuccess,
  selectQuery,
  selectPage,
} from "./popularMoviesSlice";
import { searchMovie } from "../../../common/Navigation/Search/getSearch";
import { getGenres } from "../../../features/movies/Genres/getGenres";
import { popularMovies } from "../../../features/movies/MoviesList/getPopularMovies";

interface MovieData {
  // Define the structure of your movie data here
}

function* fetchPopularMoviesHandler() {
  try {
    const page: number = yield select(selectPage);
    const genres: string[] = yield call(getGenres);
    const query: string = yield select(selectQuery);
    let data: MovieData;

    if (query !== "") {
      data = yield call(searchMovie, { page, query });
    } else {
      data = yield call(popularMovies, { page });
    }

    yield put(fetchMoviesListSuccess({ data, genres }));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

export function* popularMoviesSaga() {
  yield takeLatest(goToPage.type, fetchPopularMoviesHandler);
}
```