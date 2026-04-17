```tsx
import { call, put, takeLatest, select } from "redux-saga/effects";
import { getPopularPeople } from "./getPopularPeople";
import {
  fetchPopularPeople,
  goToPage,
  fetchPopularPeopleError,
  fetchPopularPeopleSuccess,
  selectPeoplePage,
  selectQuery,
} from "./popularPeopleSlice";
import { searchPeople } from "../../../common/Navigation/Search/getSearch";

interface FetchPopularPeopleHandlerParams {
  page: number;
  query: string;
}

function* fetchPopularPeopleHandler() {
  try {
    const page: number = yield select(selectPeoplePage);
    const query: string = yield select(selectQuery);
    let data;

    if (query !== "") {
      data = yield call(searchPeople, { page, query });
    } else {
      data = yield call(getPopularPeople, { page });
    }

    yield put(fetchPopularPeopleSuccess({ data }));
  } catch (error) {
    yield put(fetchPopularPeopleError());
  }
}

export function* popularPeopleSaga() {
  yield takeLatest(goToPage.type, fetchPopularPeopleHandler);
}
```