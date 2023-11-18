import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { IBooksWithCategories } from '@/app/types';

interface BookState {
  isDataLoading: boolean;
  booksWithCategories: IBooksWithCategories[];
  bookListById: [];
}

const initialState: BookState = {
  isDataLoading: false,
  booksWithCategories: [],
  bookListById: [],
};

const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getBookCategoriesAction: (state) => {
      state.isDataLoading = true;
    },
    getBookCategoriesActionSuccess: (state, action) => {
      state.booksWithCategories = action.payload;
      state.isDataLoading = false;
    },
    getBookCategoriesActionFail: (state, action) => {
      state.isDataLoading = false;
      state.booksWithCategories = [];
    },
    getBooksByIdAction: (state, action) => {
      state.isDataLoading = true;
    },
    getBooksByIdActionSuccess: (state, action) => {
      state.bookListById = action.payload;
      state.isDataLoading = false;
    },
    getBooksByIdActionFail: (state, action) => {
      state.isDataLoading = false;
      state.bookListById = [];
    },
  },
});

export const {
  getBookCategoriesAction,
  getBookCategoriesActionFail,
  getBookCategoriesActionSuccess,
  getBooksByIdAction,
  getBooksByIdActionFail,
  getBooksByIdActionSuccess,
} = books.actions;

export const useBooksWithCategories = () => useSelector((state: any) => state.books.booksWithCategories);
export const useBookList = () => useSelector((state: any) => state.books.bookListById);

export default books.reducer;
