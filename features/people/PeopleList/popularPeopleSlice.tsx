```tsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PopularPeopleState {
  people: any[]; // Można zdefiniować bardziej szczegółowy typ dla osób.
  status: 'loading' | 'success' | 'error';
  query: string;
  page: number;
  totalPages: number;
  totalResults: number;
}

interface FetchPopularPeopleSuccessPayload {
  data: {
    total_pages: number;
    total_results: number;
    results: any[]; // Można zdefiniować bardziej szczegółowy typ dla wyników.
  };
}

const initialState: PopularPeopleState = {
  people: [],
  status: "loading",
  query: "",
  page: 1,
  totalPages: 0,
  totalResults: 0,
};

const popularPeopleSlice = createSlice({
  name: "popularPeople",
  initialState,
  reducers: {
    fetchPopularPeople: (state) => {
      state.status = "loading";
    },
    fetchPopularPeopleSuccess: (state, action: PayloadAction<FetchPopularPeopleSuccessPayload>) => {
      state.status = "success";
      state.totalPages = Math.min(action.payload.data.total_pages, 500);
      state.totalResults = action.payload.data.total_results;
      state.people = action.payload.data.results;
    },
    fetchPopularPeopleError: (state) => {
      state.status = "error";
    },
    goToPage: (state, action: PayloadAction<{ page: number }>) => {
      state.status = "loading";
      state.page = action.payload.page;
    },
    setQuery: (state, action: PayloadAction<{ query: string }>) => {
      state.status = "loading";
      state.query = action.payload.query;
    },
  },
});

export const {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  goToPage,
  setQuery,
} = popularPeopleSlice.actions;

export const selectStatePopularPeople = (state: { popularPeople: PopularPeopleState }) => state.popularPeople;
export const selectPopularPeopleStatus = (state: { popularPeople: PopularPeopleState }) =>
  selectStatePopularPeople(state).status;
export const selectPopularPeople = (state: { popularPeople: PopularPeopleState }) =>
  selectStatePopularPeople(state).people;
export const selectPeoplePage = (state: { popularPeople: PopularPeopleState }) => 
  selectStatePopularPeople(state).page;
export const selectTotalPages = (state: { popularPeople: PopularPeopleState }) =>
  selectStatePopularPeople(state).totalPages;
export const selectTotalResults = (state: { popularPeople: PopularPeopleState }) =>
  selectStatePopularPeople(state).totalResults;
export const selectQuery = (state: { popularPeople: PopularPeopleState }) => 
  selectStatePopularPeople(state).query;

export default popularPeopleSlice.reducer;
```