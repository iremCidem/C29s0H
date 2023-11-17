import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

interface AuthState {
  isLoading: boolean;
  token: string;
}

const initialState: AuthState = {
  isLoading: false,
  token: '',
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUserAction: (state, action) => {
      state.isLoading = true;
    },
    registerUserActionSuccess: (state, action) => {
      state.token = action.payload;
      state.isLoading = true;
    },
    registerUserActionFail: (state, action) => {
      state.isLoading = true;
      state.token = '';
    },
  },
});

export const { registerUserAction, registerUserActionFail, registerUserActionSuccess } = auth.actions;

export const useToken = () => useSelector((state: any) => state.auth.token);

export default auth.reducer;
