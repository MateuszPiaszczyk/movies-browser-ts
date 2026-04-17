```tsx
import { DetailsRating } from "../Rating";
import { GenresDetails } from "../../features/movies/Genres";
import { DetailsImage } from "../Images";
import { AdditionalInfo, MainInfoDetails } from "../Informations";
import { Overview, DetailsDescription, Details } from "./styled";

interface MovieDetailsTileProps {
  poster: string;
  title: string;
  year: number;
  genres: string[];
  vote: number;
  votes: number;
  overview: string;
  production: string;
  release: string;
}

export const MovieDetailsTile: React.FC<MovieDetailsTileProps> = ({
  poster,
  title,
  year,
  genres,
  vote,
  votes,
  overview,
  production,
  release,
}) => (
  <Details>
    <DetailsImage poster={poster} />
    <DetailsDescription>
      <MainInfoDetails title={title} year={year} />
      <AdditionalInfo production={production} release={release} />
      <GenresDetails genres={genres} />
      <DetailsRating vote={vote} votes={votes} />
    </DetailsDescription>
    <Overview>{overview}</Overview>
  </Details>
);
```