import * as types from '../types';

export function clickButtonSuccess(data) {
  return {
    type: types.CLICK_BUTTON_SUCCESS,
    payload: data,
  };
}

export function clickButtonFailure() {
  return {
    type: types.CLICK_BUTTON_FAILURE,
  };
}

export function clickButtonRequest(data) {
  return {
    type: types.CLICK_BUTTON_REQUEST,
    payload: data,
  };
}
