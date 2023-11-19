import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { IBooksWithCategories, IBookDetail } from '@/app/types';

interface BookState {
  isDataLoading: boolean;
  booksWithCategories: IBooksWithCategories[];
  bookListById: [];
  selectedBook: IBookDetail | null;
}

const initialState: BookState = {
  isDataLoading: false,
  booksWithCategories: [],
  bookListById: [],
  selectedBook: null,
};
interface bookStateProps {
  books: BookState;
}

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
      state.selectedBook = null;
    },
    setBooksFavoriteAction: (state, action) => {},
    setBooksFavoriteActionSuccess: (state, action) => {
      state.selectedBook = action.payload;
    },
    setBooksFavoriteActionFail: (state, action) => {
      state.selectedBook = null;
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

export const useBooksWithCategories = () => useSelector((state: bookStateProps) => state.books.booksWithCategories);
export const useBookList = () => useSelector((state: bookStateProps) => state.books.bookListById);
export const useBooksLoading = () => useSelector((state: bookStateProps) => state.books.isDataLoading);
export const useSelectedBook = () => useSelector((state: bookStateProps) => state.books.selectedBook);

export default books.reducer;
