import { AxiosResponse } from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
  getBookCategoriesService,
  getRegisterService,
  getBooksByCategoryIdService,
  userLoginService,
} from '@/services';
import {
  registerUserAction,
  registerUserActionFail,
  registerUserActionSuccess,
  loginUserAction,
  loginUserActionFail,
  loginUserActionSuccess,
} from './auth';
import { all, fork } from 'redux-saga/effects';
import { KEYS } from '@/constants';
import {
  getBookCategoriesAction,
  getBookCategoriesActionFail,
  getBookCategoriesActionSuccess,
  getBooksByIdAction,
  getBooksByIdActionFail,
  getBooksByIdActionSuccess,
} from './books';
import { SagaIterator } from 'redux-saga';
import { setLocalStorage } from '@/helpers';
import { toast } from 'react-toastify';

// Generator function
function* getRegisterUserSaga(action: any) {
  try {
    const { values, navigateHome } = action.payload;
    // You can also export the axios call as a function.
    const response: AxiosResponse = yield call(() => getRegisterService(values));
    yield put(registerUserActionSuccess(response.data.action_register.token));
    setLocalStorage(KEYS.AUTH_TOKEN, response.data.action_register.token);
    navigateHome();
  } catch (error) {
    console.log(error);
    yield put(registerUserActionFail(error));
  }
}

function* userLoginSaga(action: any) {
  try {
    const { values, navigateHome } = action.payload;
    // You can also export the axios call as a function.
    const response: AxiosResponse = yield call(() => userLoginService(values));
    const authToken = response.data.action_login.token;
    if (!authToken) {
      yield put(loginUserActionFail('error'));
      toast.error('Please check your credentials');
    } else {
      yield put(loginUserActionSuccess(response.data.action_login.token));
      setLocalStorage(KEYS.AUTH_TOKEN, response.data.action_login.token);
      navigateHome();
    }
  } catch (error) {
    toast.error('Please check your credentials');
    yield put(loginUserActionFail(error));
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

function* getBookCategoriesSaga(): SagaIterator {
  try {
    const response: AxiosResponse = yield call(() => getBookCategoriesService());
    const categoryIds = response.data.category.map((category: any) => category.id);

    // Fetching details for each category
    const categoryDetailsRequests = categoryIds.map((id: any) => call(() => getBooksByCategoryIdService(id)));

    // Waiting for all the category details to be fetched
    const categoryDetails: any = yield all(categoryDetailsRequests);
    const data = categoryDetails.map((item: any, index: any) => ({
      category: response.data.category[index],
      products: item.data.product,
    }));
    yield put(getBookCategoriesActionSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(getBookCategoriesActionFail(error));
  }
}

// Generator function
export function* storeSaga() {
  yield takeLatest(registerUserAction.type, getRegisterUserSaga);
  yield takeLatest(getBookCategoriesAction.type, getBookCategoriesSaga);
  yield takeLatest(getBooksByIdAction.type, getBooksByCategoryIdSaga);
  yield takeLatest(loginUserAction.type, userLoginSaga);
}

const rootSaga = function* () {
  yield all([fork(storeSaga)]);
};

export default rootSaga;
