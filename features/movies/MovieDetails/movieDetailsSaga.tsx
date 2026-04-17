```tsx
import { takeLatest, select, call, put } from "redux-saga/effects";
import {
  selectMovieId,
  getMovieId,
  fetchMovieDetailsError,
  fetchMovieDetailsSuccess,
} from "./movieDetailsSlice";
import { getMovieDetails, getMovieCredits } from "./getMovieDetails";

function* fetchMovieDetailsHandler(): Generator<any, void, any> {
  try {
    const movieId: string = yield select(selectMovieId);
    const details: any = yield call(getMovieDetails, { movieId });
    const credits: any = yield call(getMovieCredits, { movieId });
    yield put(fetchMovieDetailsSuccess({ details, credits }));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

export function* movieDetailsSaga(): Generator<any, void, any> {
  yield takeLatest(getMovieId.type, fetchMovieDetailsHandler);
}
```