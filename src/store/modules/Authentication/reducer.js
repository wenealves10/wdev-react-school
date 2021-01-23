/* eslint-disable no-console */
import * as types from '../types';

const initialState = {
  buttonClick: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CLICK_BUTTON_SUCCESS: {
      console.log('Success');
      const newState = { ...state };
      newState.buttonClick = !newState.buttonClick;
      return newState;
    }
    case types.CLICK_BUTTON_FAILURE: {
      console.log('Failure');
      return state;
    }
    case types.CLICK_BUTTON_REQUEST: {
      console.log('Request');
      return state;
    }

    default: {
      return state;
    }
  }
}
