```tsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchPersonDetails,
  fetchPersonDetailsError,
  getPersonId,
  selectCast,
  selectCredits,
  selectDetails,
  selectStatus,
} from "./personSlice";
import { MainPersonTile } from "./MainPersonTile";
import { MainHeader } from "../../../common/MainHeader";
import { Container } from "../../../common/Container/styled";
import { Loading } from "../../../common/Loading";
import { ErrorPage } from "../../../common/ErrorPage";
import { MovieTile } from "../../../common/MovieTile";
import { Bottom, List, StyledLink } from "./styled";
import { toMovie } from "../../../core/App/routes";

interface Movie {
  id: number;
  genre_ids: number[];
}

interface Credits {
  cast: Movie[];
  crew: Movie[];
}

interface PersonDetails {
  profile_path: string;
  name: string;
  birthday: string;
  place_of_birth: string;
  biography: string;
}

interface Params {
  personId: string;
}

export const PersonPage: React.FC = () => {
  const dispatch = useDispatch();
  const { personId } = useParams<Params>();
  const details = useSelector(selectDetails) as PersonDetails;
  const cast = useSelector(selectCast) as Movie[];
  const credits = useSelector(selectCredits) as Credits;
  const status = useSelector(selectStatus) as string;

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getPersonId({ personId }));
        dispatch(fetchPersonDetails());
      } catch (error) {
        dispatch(fetchPersonDetailsError());
      }
    };

    fetchData();
  }, [personId, dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <ErrorPage />;
  }

  return (
    <Container>
      <MainPersonTile
        poster={details.profile_path}
        name={details.name}
        birthday={details.birthday}
        birthplace={details.place_of_birth}
        biography={details.biography}
      />
      {credits.cast.length > 0 && (
        <>
          <MainHeader title={`Movies - cast (${credits.cast.length})`} />
          <List>
            {credits.cast.map((movie) => (
              <div key={movie.id}>
                <StyledLink to={toMovie({ movieId: movie.id })}>
                  <MovieTile
                    movie={movie}
                    id={movie.id}
                    genres={movie.genre_ids}
                  />
                </StyledLink>
              </div>
            ))}
          </List>
        </>
      )}
      {credits.crew.length > 0 && (
        <>
          <MainHeader title={`Movies - crew (${credits.crew.length})`} />
          <List>
            {credits.crew.map((movie) => (
              <div key={movie.id}>
                <StyledLink to={toMovie({ movieId: movie.id })}>
                  <MovieTile
                    movie={movie}
                    id={movie.id}
                    genres={movie.genre_ids}
                  />
                </StyledLink>
              </div>
            ))}
          </List>
        </>
      )}
      <Bottom />
    </Container>
  );
};
```