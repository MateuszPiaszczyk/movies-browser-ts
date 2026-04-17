```tsx
import axios from "axios";

const API_KEY = "ae7d4af255a05506e1ed3b49e48b0d5c";
const API_URL = "https://api.themoviedb.org/3";

interface SearchMovieParams {
  query: string;
  page: number;
}

interface SearchPeopleParams {
  query: string;
  page: number;
}

interface ApiResponse {
  results: any[];
  page: number;
  total_results: number;
  total_pages: number;
}

export const searchMovie = async ({ query, page }: SearchMovieParams): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(
    `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return response.data;
};

export const searchPeople = async ({ page, query }: SearchPeopleParams): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(
    `${API_URL}/search/person?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return response.data;
};
```