```tsx
import axios from "axios";

const API_KEY = "ae7d4af255a05506e1ed3b49e48b0d5c";
const API_URL = "https://api.themoviedb.org/3";

interface PersonId {
  personId: number;
}

interface PersonResponse {
  id: number;
  name: string;
  // Dodaj inne właściwości, które będziesz potrzebować
}

interface CreditsResponse {
  id: number;
  cast: Array<any>; // Możesz zdefiniować dokładniejszy typ zamiast "any"
  crew: Array<any>; // Możesz zdefiniować dokładniejszy typ zamiast "any"
}

export const getPerson = async ({ personId }: PersonId): Promise<PersonResponse> => {
  try {
    const response = await axios.get<PersonResponse>(
      `${API_URL}/person/${personId}?api_key=${API_KEY}&language=en-US`
    );
    if (response.status !== 200) {
      throw new Error(response.data.status_message);
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPersonCredits = async ({ personId }: PersonId): Promise<CreditsResponse> => {
  try {
    const response = await axios.get<CreditsResponse>(
      `${API_URL}/person/${personId}/movie_credits?api_key=${API_KEY}&language=en-US`
    );
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