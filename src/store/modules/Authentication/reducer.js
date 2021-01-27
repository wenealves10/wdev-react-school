import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: '',
  user: {},
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      return state;
    }
    case types.LOGIN_FAILURE: {
      return state;
    }
    case types.LOGIN_REQUEST: {
      console.log('Reducer', action.payload);
      return state;
    }

    default: {
      return state;
    }
  }
}
