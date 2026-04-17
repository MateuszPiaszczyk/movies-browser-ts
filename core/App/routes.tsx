```tsx
interface MovieParams {
  movieId?: string;
}

interface PersonParams {
  personId?: string;
}

export const toMovies = (): string => "/movies";
export const toPeople = (): string => "/people";
export const toMovie = ({ movieId }: MovieParams = { movieId: ":movieId" }): string => 
  `/movies/${movieId}`;
export const toPerson = ({ personId }: PersonParams = { personId: ":personId" }): string => 
  `/people/${personId}`;
```