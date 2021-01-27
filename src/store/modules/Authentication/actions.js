import * as types from '../types';

export function LoginSuccess(data) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: data,
  };
}

export function LoginFailure() {
  return {
    type: types.LOGIN_FAILURE,
  };
}

export function LoginRequest(data) {
  return {
    type: types.LOGIN_REQUEST,
    payload: data,
  };
}
