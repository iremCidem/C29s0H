import { AxiosResponse } from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import { bookCategoriesService, registerService, getBooksByCategoryIdService } from '@/services';
import { registerUserAction, registerUserActionFail, registerUserActionSuccess } from './auth';
import { all, fork } from 'redux-saga/effects';
import { setCookie } from '@/helpers';
import { KEYS } from '@/constants';
import {
  bookCategoriesAction,
  bookCategoriesActionFail,
  bookCategoriesActionSuccess,
  getBooksByIdAction,
  getBooksByIdActionFail,
  getBooksByIdActionSuccess,
} from './books';
import { SagaIterator } from 'redux-saga';

// Generator function
function* registerUserSaga(action: any) {
  try {
    const { values, navigateHome } = action.payload;
    // You can also export the axios call as a function.
    const response: AxiosResponse = yield call(() => registerService(values));
    yield put(registerUserActionSuccess(response.data.action_register.token));
    setCookie(KEYS.AUTH_TOKEN, response.data.action_register.token);
    navigateHome();
  } catch (error) {
    yield put(registerUserActionFail(error));
  }
}

function* getBooksByCategoryIdSaga(action: any) {
  try {
    const response: AxiosResponse = yield call(() => getBooksByCategoryIdService(action.payload));
    yield put(getBooksByIdActionSuccess(response.data));
  } catch (error) {
    yield put(getBooksByIdActionFail(error));
  }
}

function* bookCategoriesSaga(): SagaIterator {
  try {
    const response: AxiosResponse = yield call(() => bookCategoriesService());
    const categoryIds = response.data.category.map((category: any) => category.id);

    // Fetching details for each category
    const categoryDetailsRequests = categoryIds.map((id: any) => call(() => getBooksByCategoryIdService(id)));

    // Waiting for all the category details to be fetched
    const categoryDetails: any = yield all(categoryDetailsRequests);
    const data = categoryDetails.map((item: any, index: any) => ({
      category: response.data.category[index],
      products: item.data.product,
    }));
    yield put(bookCategoriesActionSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(bookCategoriesActionFail(error));
  }
}

// Generator function
export function* storeSaga() {
  yield takeLatest(registerUserAction.type, registerUserSaga);
  yield takeLatest(bookCategoriesAction.type, bookCategoriesSaga);
  yield takeLatest(getBooksByIdAction.type, getBooksByCategoryIdSaga);
}

const rootSaga = function* () {
  yield all([fork(storeSaga)]);
};

export default rootSaga;
