```tsx
import { call, delay, put, takeLatest, select } from "redux-saga/effects";
import { getPerson, getPersonCredits } from "./getPersonApi";
import {
  selectPersonId,
  getPersonId,
  fetchPersonDetailsError,
  fetchPersonDetailsSuccess,
} from "./personSlice";

interface PersonDetails {
  // Define the shape of the person details as required
}

interface PersonCredits {
  // Define the shape of the person credits as required
}

function* fetchPersonDetailsHandler() {
  try {
    yield delay(1000);
    const personId: number = yield select(selectPersonId);
    const details: PersonDetails = yield call(getPerson, { personId });
    const credits: PersonCredits = yield call(getPersonCredits, { personId });

    console.log("fetchPersonDetailsSuccess:", details, credits);

    yield put(fetchPersonDetailsSuccess({ details, credits }));
  } catch (error) {
    console.log("fetchPersonDetailsError:", error);

    yield put(fetchPersonDetailsError());
  }
}

export function* personDetailsSaga() {
  yield takeLatest(getPersonId.type, fetchPersonDetailsHandler);
}
```