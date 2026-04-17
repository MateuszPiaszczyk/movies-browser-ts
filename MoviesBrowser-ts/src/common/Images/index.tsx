```tsx
import { Wrapper, Poster } from "./styled";

interface DetailsImageProps {
  poster?: string;
}

export const DetailsImage: React.FC<DetailsImageProps> = ({ poster }) => {
  const URL = "https://image.tmdb.org/t/p/w500";

  return (
    <Wrapper movieDetails>
      <Poster noMovie />
      {poster && <Poster background={`${URL}${poster}`} />}
    </Wrapper>
  );
};

interface MovieImageProps {
  poster?: string;
}

export const MovieImage: React.FC<MovieImageProps> = ({ poster }) => {
  const URL = "https://image.tmdb.org/t/p/w300";

  return (
    <Wrapper>
      <Poster noMovie />
      {poster && <Poster background={`${URL}${poster}`} />}
    </Wrapper>
  );
};

interface PersonImageProps {
  poster?: string;
}

export const PersonImage: React.FC<PersonImageProps> = ({ poster }) => {
  const URL = "https://image.tmdb.org/t/p/w185";

  return (
    <Wrapper person>
      <Poster noPerson />
      {poster && <Poster background={`${URL}${poster}`} />}
    </Wrapper>
  );
};
```