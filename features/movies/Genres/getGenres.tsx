```typescript
import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "ae7d4af255a05506e1ed3b49e48b0d5c";

interface Genre {
  id: number;
  name: string;
}

interface GenresResponse {
  genres: Genre[];
}

export const getGenres = async (): Promise<Genre[]> => {
  const response = await axios.get<GenresResponse>(
    `${URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return response.data.genres;
};
```