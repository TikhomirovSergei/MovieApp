import { createSlice } from '@reduxjs/toolkit';
import { PremiereResponseItem, getPremieres } from '../services';

const premieresSlice = createSlice({
  name: 'premieres',
  initialState: {
    total: 0,
    items: [] as PremiereResponseItem[],
    loading: false,
    error: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPremieres.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(getPremieres.fulfilled, (state, action) => {
      state.total = action.payload.total;
      state.items = action.payload.items;
      state.loading = false;
    });
    builder.addCase(getPremieres.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? '';
    });
  }
});

export default premieresSlice.reducer;
