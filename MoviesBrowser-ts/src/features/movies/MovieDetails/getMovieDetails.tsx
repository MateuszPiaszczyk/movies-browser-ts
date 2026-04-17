```tsx
import axios from "axios";

const API_KEY = "ae7d4af255a05506e1ed3b49e48b0d5c";
const API_URL = "https://api.themoviedb.org/3";

interface MovieIdParams {
  movieId: number;
}

interface MovieDetails {
  // Zdefiniuj odpowiednie pola na podstawie danych, które zwraca API
  id: number;
  title: string;
  // Dodaj inne pola, które są zwracane przez API
}

interface MovieCredits {
  id: number;
  cast: Array<{
    id: number;
    name: string;
    // Dodaj inne pola, które są zwracane przez API
  }>;
}

export const getMovieDetails = async ({ movieId }: MovieIdParams): Promise<MovieDetails> => {
  console.log("getMovieDetails movieId:", movieId);
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    if (response.status !== 200) {
      throw new Error(response.data.status_message);
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieCredits = async ({ movieId }: MovieIdParams): Promise<MovieCredits> => {
  console.log("getMovieCredits movieId:", movieId);
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    if (response.status !== 200) {
      throw new Error(response.data.status_message);
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
```