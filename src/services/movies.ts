import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_KEY, HOST } from './constants';
import { Month, PremiereResponse } from './types';

export const getPremieres = createAsyncThunk(
  'premieres/getPremieres',
  async ({
    year,
    month
  }: {
    year: number;
    month: Month;
  }): Promise<PremiereResponse> => {
    const response = await axios.get(
      `${HOST}/api/v2.2/films/premieres?year=${year}&month=${month}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': API_KEY
        }
      }
    );
    return response.data;
  }
);
