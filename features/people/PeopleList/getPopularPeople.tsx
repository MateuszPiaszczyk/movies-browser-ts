```tsx
import axios from "axios";

const API_KEY = "ae7d4af255a05506e1ed3b49e48b0d5c";
const API_URL = "https://api.themoviedb.org/3";

interface GetPopularPeopleParams {
  page: number;
}

interface PopularPeopleResponse {
  page: number;
  results: Array<{
    id: number;
    name: string;
    popularity: number;
    profile_path: string | null;
  }>;
  total_pages: number;
  total_results: number;
}

export const getPopularPeople = async ({ page }: GetPopularPeopleParams): Promise<PopularPeopleResponse> => {
  const response = await axios.get<PopularPeopleResponse>(
    `${API_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return response.data;
};
```