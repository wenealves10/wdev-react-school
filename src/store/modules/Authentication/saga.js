import { call, put, takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actionsLogin from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* Authentication({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(axios.post, '/auth/token', { email, password });
    yield put(actionsLogin.LoginSuccess({ ...response.data }));
    toast.success(`Usuário ${response.data.user.name} está logado!`);
    axios.defaults.headers.Authorization = `Bearer ${response.data.user.token}`;
    history.push(payload.prevPatch);
  } catch (error) {
    const status = get(error, 'response.status', []);
    if (status === 400) {
      toast.error('Senha Inválida', {
        toastId: 'ErrorPassword',
      });
    }
    if (status === 404) {
      toast.error('Usuário não existe', {
        toastId: 'ErrorEmail',
      });
    }
    yield put(actionsLogin.LoginFailure());
  }
}

function persistHydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, Authentication),
  takeLatest(types.PERSIST_HYDRATE, persistHydrate),
]);
