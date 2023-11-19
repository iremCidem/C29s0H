import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { IBooksWithCategories, IBookDetail } from '@/app/types';

interface BookState {
  isDataLoading: boolean;
  booksWithCategories: IBooksWithCategories[];
  bookListById: [];
  selectedBook: IBookDetail;
}

const initialState: BookState = {
  isDataLoading: false,
  booksWithCategories: [],
  bookListById: [],
  selectedBook: undefined,
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
    getBookDetailAction: (state, action) => {
      state.isDataLoading = true;
    },
    getBookDetailActionSuccess: (state, action) => {
      state.selectedBook = action.payload;
      state.isDataLoading = false;
    },
    getBookDetailActionFail: (state, action) => {
      state.isDataLoading = false;
      state.selectedBook = [];
    },
    setBooksFavoriteAction: (state, action) => {},
    setBooksFavoriteActionSuccess: (state, action) => {
      state.selectedBook = action.payload;
    },
    setBooksFavoriteActionFail: (state, action) => {
      state.selectedBook = [];
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
  getBookDetailAction,
  getBookDetailActionFail,
  getBookDetailActionSuccess,
  setBooksFavoriteAction,
  setBooksFavoriteActionFail,
  setBooksFavoriteActionSuccess,
} = books.actions;

export const useBooksWithCategories = () => useSelector((state) => state.books.booksWithCategories);
export const useBookList = () => useSelector((state) => state.books.bookListById);
export const useBooksLoading = () => useSelector((state) => state.books.isDataLoading);
export const useSelectedBook = () => useSelector((state) => state.books.selectedBook);

export default books.reducer;
