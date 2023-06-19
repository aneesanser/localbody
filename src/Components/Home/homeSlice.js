import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLocalDetails = createAsyncThunk(
  "local-body",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:4000/localbodydetails"
      );
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response.data);
      }
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const homeSlice = createSlice({
  name: "local-body",
  initialState: {
    localData: "",
    isLoading: false,
    updateSuccessMsg: "",
    UpdateErrorMessage: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLocalDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLocalDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.localData = payload;
        state.successMessage = payload.message;
      })
      .addCase(getLocalDetails.rejected, (state, { payload }) => {
        state.localData = "";
        state.errorMessage = payload.message;
      });
  },
});

export default homeSlice.reducer;
