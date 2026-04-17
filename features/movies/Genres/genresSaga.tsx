```typescript
import { call, put, takeLatest } from "redux-saga/effects";
import { getGenres } from "./getGenres";
import {
  fetchGenres,
  fetchGenresSuccess,
  fetchGenresError,
} from "./genresSlice";

interface Genre {
  id: number;
  name: string;
}

function* fetchGenresHandler() {
  try {
    const genres: Genre[] = yield call(getGenres);
    yield put(fetchGenresSuccess(genres));
  } catch (error) {
    yield put(fetchGenresError());
    console.error("Download failed.", error);
  }
}

export function* genresSaga() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
```