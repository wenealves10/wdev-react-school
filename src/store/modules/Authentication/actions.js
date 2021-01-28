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

export function ForgotPasswordSuccess(data) {
  return {
    type: types.FORGOT_PASSWORD_SUCCESS,
    payload: data,
  };
}

export function ForgotPasswordFailure() {
  return {
    type: types.FORGOT_PASSWORD_FAILURE,
  };
}

export function ForgotPasswordRequest(data) {
  return {
    type: types.FORGOT_PASSWORD_REQUEST,
    payload: data,
  };
}
