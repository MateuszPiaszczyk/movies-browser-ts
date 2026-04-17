```tsx
import { API_KEY, ApiPopularMovies } from "../../../core/apiCodes";

interface PopularMoviesParams {
  page: number;
}

interface MovieData {
  // Definiuj właściwości według struktury danych, które zwraca API
  // Przykładowe właściwości:
  results: Array<{
    id: number;
    title: string;
    // Dodaj inne właściwości filmu według schematu API
  }>;
  total_pages: number;
  total_results: number;
}

export const popularMovies = async ({ page }: PopularMoviesParams): Promise<MovieData | undefined> => {
  try {
    const response = await fetch(
      `${ApiPopularMovies}?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    if (!response.ok) {
      throw new Error("Not found movies.");
    }
    const data: MovieData = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
```