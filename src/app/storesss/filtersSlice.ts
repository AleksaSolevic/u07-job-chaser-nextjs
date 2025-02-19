import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  searchTerm: string;
  role: string;
  location: string;
  level: string;
}

const initialState: FiltersState = {
  searchTerm: "",
  role: "",
  location: "",
  level: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setRole(state, action: PayloadAction<string>) {
      state.role = action.payload;
    },
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    setLevel(state, action: PayloadAction<string>) {
      state.level = action.payload;
    },
  },
});

export const { setSearchTerm, setRole, setLocation, setLevel } =
  filtersSlice.actions;
export default filtersSlice.reducer;
