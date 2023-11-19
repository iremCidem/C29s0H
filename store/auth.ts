import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { getLocalStorage, setLocalStorage, getSessionStorage } from '@/helpers';
import { KEYS } from '@/constants';
interface AuthState {
  isLoading: boolean;
  token: string;
}

const initialState: AuthState = {
  isLoading: false,
  token: getLocalStorage(KEYS.AUTH_TOKEN) || getSessionStorage(KEYS.AUTH_TOKEN),
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
    loginUserAction: (state, action) => {
      state.isLoading = true;
    },
    loginUserActionSuccess: (state, action) => {
      state.token = action.payload;
      state.isLoading = true;
    },
    loginUserActionFail: (state, action) => {
      state.isLoading = true;
      state.token = '';
    },
  },
});

export const {
  registerUserAction,
  registerUserActionFail,
  registerUserActionSuccess,
  loginUserAction,
  loginUserActionFail,
  loginUserActionSuccess,
} = auth.actions;

export const useToken = () => useSelector((state: any) => state.auth.token);

export default auth.reducer;
