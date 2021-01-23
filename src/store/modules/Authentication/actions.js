import * as types from '../types';

export function clickButtonSuccess() {
  return {
    type: types.CLICK_BUTTON_SUCCESS,
  };
}

export function clickButtonFailure() {
  return {
    type: types.CLICK_BUTTON_FAILURE,
  };
}

export function clickButtonRequest() {
  return {
    type: types.CLICK_BUTTON_REQUEST,
  };
}
