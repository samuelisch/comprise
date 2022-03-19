import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import musicCall from "../musicCall";
import type { RootState } from "./store";

export type ComposerType = {
  id: string;
  birth: string;
  death: string;
  name: string;
  completeName: string;
  epoch: string;
  portrait: string;
};

type ComposersState = {
  status: "loading" | "idle" | "loaded";
  error: string | null;
  composerList: ComposerType[];
};

const initialState = {
  status: "idle",
  composerList: [],
  error: null,
} as ComposersState;

export const composersSlice = createSlice({
  name: "composers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllComposers.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchAllComposers.fulfilled, (state, action) => {
      state.composerList = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchAllComposers.rejected, (state, action) => {
      if (action.payload) {
        state.error = "Failed to fetch composers";
      }
      state.status = "idle";
    });
  },
});

export const selectStatus = (state: RootState) => state.composers.status;
export const selectComposers = (state: RootState) =>
  state.composers.composerList;

export const fetchAllComposers = createAsyncThunk<ComposerType[]>(
  "composers/init",
  async () => {
    const data = await musicCall.getAllComposers();
    return data.composers;
  }
);

export default composersSlice.reducer;
