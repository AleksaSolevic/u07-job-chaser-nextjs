import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AllJobProps } from "../../../types/types";

interface JobsState {
  jobs: AllJobProps[];
  loading: boolean;
  error: string | null;
}

const initialState: JobsState = {
  jobs: [],
  loading: false,
  error: null,
};

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await fetch("/jobs.json");
  if (!response.ok) throw new Error("Failed to fetch jobs");
  const data: AllJobProps[] = await response.json();
  return data;
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch jobs";
      });
  },
});

export default jobsSlice.reducer;
