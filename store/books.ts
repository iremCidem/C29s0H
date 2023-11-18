import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

interface BookState {
  isDataLoading: boolean;
  booksWithCategories: [];
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
    bookCategoriesAction: (state) => {
      state.isDataLoading = true;
    },
    bookCategoriesActionSuccess: (state, action) => {
      state.booksWithCategories = action.payload;
      state.isDataLoading = false;
    },
    bookCategoriesActionFail: (state, action) => {
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
  bookCategoriesAction,
  bookCategoriesActionFail,
  bookCategoriesActionSuccess,
  getBooksByIdAction,
  getBooksByIdActionFail,
  getBooksByIdActionSuccess,
} = books.actions;

export const useBooksWithCategories = () => useSelector((state: any) => state.books.booksWithCategories);
export const useBookList = () => useSelector((state: any) => state.books.bookListById);

export default books.reducer;
