```tsx
import createSagaMiddleware from "@redux-saga/core";
import { configureStore, Middleware } from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";
import popularMoviesReducer from "../features/movies/MoviesList/popularMoviesSlice";
import popularPeopleReducer from "../features/people/PeopleList/popularPeopleSlice";
import genresReducer from "../features/movies/Genres/genresSlice";
import movieDetailsReducer from "../features/movies/MovieDetails/movieDetailsSlice";
import personDetailsReducer from "../features/people/PersonPage/personSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    genres: genresReducer,
    popularPeople: popularPeopleReducer,
    movieDetails: movieDetailsReducer,
    personDetails: personDetailsReducer,
  },
  middleware: (getDefaultMiddleware): Middleware[] => 
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
```