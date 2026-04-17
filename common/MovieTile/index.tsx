```tsx
import React from 'react';
import {
  Tile,
  Poster,
  Content,
  Title,
  Year,
  Tags,
  Tag,
  TagName,
  Rating,
  Star,
  Rate,
  Votes,
  PosterWrapper,
} from "./styled";
import { IMG_URL } from "../../core/apiCodes";
import { Genres } from "../../features/movies/Genres";
import noPoster from "../img/no-poster.svg";

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  poster_path: string | null;
  title: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

interface MovieTileProps {
  movie: Movie;
  genres: number[];
}

export const MovieTile: React.FC<MovieTileProps> = ({ movie, genres }) => {
  const genresMovie = Genres.filter((genre: Genre) => genres.includes(genre.id));
  
  return (
    <Tile>
      <PosterWrapper>
        {movie.poster_path ? (
          <Poster src={`${IMG_URL}${movie.poster_path}`} alt="movie poster" />
        ) : (
          <img src={noPoster} alt="poster not available" />
        )}
      </PosterWrapper>
      <Content>
        <Title>{movie.title}</Title>
        <Year>{movie.release_date.slice(0, 4)}</Year>
        <Tags>
          {genresMovie.map((genre) => (
            <Tag key={genre.id}>
              <TagName>{genre.name}</TagName>
            </Tag>
          ))}
        </Tags>
        <Rating>
          <Star />
          <Rate>{movie.vote_average.toFixed(1)}</Rate>
          <Votes>{movie.vote_count} votes</Votes>
        </Rating>
      </Content>
    </Tile>
  );
};
```