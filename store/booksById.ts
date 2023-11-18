import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

interface booksByIdState {
  isDataLoading: boolean;
  bookList: [];
}

const initialState: booksByIdState = {
  isDataLoading: false,
  bookList: [],
};

const booksById = createSlice({
  name: 'booksById',
  initialState,
  reducers: {
    booksByIdAction: (state, action) => {
      state.isDataLoading = true;
    },
    booksByIdActionSuccess: (state, action) => {
      state.bookList = action.payload;
      state.isDataLoading = false;
    },
    booksByIdActionFail: (state, action) => {
      state.isDataLoading = false;
      state.bookList = [];
    },
  },
});

export const { booksByIdAction, booksByIdActionFail, booksByIdActionSuccess } = booksById.actions;

export const useBookList = () => useSelector((state: any) => state.booksById.bookList);

export default booksById.reducer;
