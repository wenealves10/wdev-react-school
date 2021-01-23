import { call, put, takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actionsButton from './actions';
import * as types from '../types';

const request = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });

function* Authentication() {
  try {
    yield call(request);
    yield put(actionsButton.clickButtonSuccess());
    toast.success('Sucesso na Chamada', {
      toastId: 1,
    });
  } catch (error) {
    yield put(actionsButton.clickButtonFailure());
    toast.error('Ocorreu um Erro', {
      toastId: 1,
    });
  }
}

export default all([takeLatest(types.CLICK_BUTTON_REQUEST, Authentication)]);
