import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import { registerService } from '@/services';
import { registerUserAction, registerUserActionFail, registerUserActionSuccess } from './auth';
import { all, fork } from 'redux-saga/effects';
import { setCookie } from '@/helpers';
import { KEYS } from '@/constants';

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

// Generator function
export function* storeSaga() {
  yield takeLatest(registerUserAction.type, registerUserSaga);
}

const rootSaga = function* () {
  yield all([fork(storeSaga)]);
};

export default rootSaga;
