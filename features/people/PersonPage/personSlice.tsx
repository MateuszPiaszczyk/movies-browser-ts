```typescript
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PersonDetails {
  // Define the structure of person details
  [key: string]: any;
}

interface Credit {
  // Define the structure of a credit
  [key: string]: any;
}

interface PersonDetailsState {
  status: "loading" | "success" | "error";
  personId: number;
  credits: Credit[];
  details: PersonDetails;
  cast: any[]; // Replace `any` with a more specific type if available
  crew: any[]; // Replace `any` with a more specific type if available
}

const initialState: PersonDetailsState = {
  status: "loading",
  personId: 0,
  credits: [],
  details: {},
  cast: [],
  crew: [],
};

const personDetailsSlice = createSlice({
  name: "personDetails",
  initialState,
  reducers: {
    fetchPersonDetails: (state) => {
      state.status = "loading";
    },
    fetchPersonDetailsSuccess: (
      state,
      action: PayloadAction<{
        details: PersonDetails;
        credits: Credit[];
        crew: any[]; // Replace `any` with a more specific type if available
        cast: any[]; // Replace `any` with a more specific type if available
      }>
    ) => {
      state.status = "success";
      state.details = action.payload.details;
      state.credits = action.payload.credits;
      state.crew = action.payload.crew;
      state.cast = action.payload.cast;
    },
    fetchPersonDetailsError: (state) => {
      state.status = "error";
    },
    getPersonId: (state, action: PayloadAction<number>) => {
      console.log("personId payload:", action.payload);
      state.personId = action.payload;
    },
  },
});

export const {
  fetchPersonDetails,
  fetchPersonDetailsSuccess,
  fetchPersonDetailsError,
  getPersonId,
} = personDetailsSlice.actions;

export const selectPersonState = (state: { personDetails: PersonDetailsState }) => state.personDetails;

export const selectStatus = (state: { personDetails: PersonDetailsState }) => selectPersonState(state).status;
export const selectDetails = (state: { personDetails: PersonDetailsState }) => selectPersonState(state).details;
export const selectCredits = (state: { personDetails: PersonDetailsState }) => selectPersonState(state).credits;
export const selectPersonId = (state: { personDetails: PersonDetailsState }) => selectPersonState(state).personId;
export const selectCrew = (state: { personDetails: PersonDetailsState }) => selectPersonState(state).crew;
export const selectCast = (state: { personDetails: PersonDetailsState }) => selectPersonState(state).cast;

export default personDetailsSlice.reducer;
```