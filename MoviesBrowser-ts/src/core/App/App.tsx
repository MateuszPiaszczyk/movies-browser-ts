```tsx
import React from "react";
import { Redirect, Route, Switch, HashRouter } from "react-router-dom";
import { Navigation } from "../../common/Navigation";
import { MoviesList } from "../../features/movies/MoviesList";
import { PeopleList } from "../../features/people/PeopleList";
import { MovieDetails } from "../../features/movies/MovieDetails";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";
import { PersonPage } from "../../features/people/PersonPage";

const App: React.FC = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toMovie()} component={MovieDetails} />
      <Route path={toMovies()} component={MoviesList} />
      <Route path={toPerson()} component={PersonPage} />
      <Route path={toPeople()} component={PeopleList} />
      <Route path="/" exact>
        <Redirect to={toMovies()} />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
```