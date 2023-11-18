import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import books from './books';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth,
    books,
  },
  middleware: [sagaMiddleware],
});

// Added line
sagaMiddleware.run(rootSaga);

export default store;
