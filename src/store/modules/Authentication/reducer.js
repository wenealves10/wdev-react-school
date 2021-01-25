import * as types from '../types';

const initialState = {
  dataUser: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CLICK_BUTTON_SUCCESS: {
      return state;
    }
    case types.CLICK_BUTTON_FAILURE: {
      return state;
    }
    case types.CLICK_BUTTON_REQUEST: {
      return state;
    }

    default: {
      return state;
    }
  }
}
