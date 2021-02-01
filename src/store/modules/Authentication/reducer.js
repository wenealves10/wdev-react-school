import * as types from '../types';
import axios from '../../../services/axios';

const initialState = {
  isLoggedIn: false,
  token: '',
  user: {},
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.user.name = action.payload.user.name;
      newState.user.email = action.payload.user.email;
      newState.user.id = action.payload.user.id;
      newState.token = action.payload.user.token;
      newState.isLoggedIn = true;
      newState.isLoading = false;
      return newState;
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      delete axios.defaults.headers.Authorization;
      return newState;
    }

    case types.RECOVERY_PASSWORD_SUCCESS: {
      const newState = { ...initialState };
      delete axios.defaults.headers.Authorization;
      return newState;
    }

    case types.RECOVERY_PASSWORD_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.RECOVERY_PASSWORD_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.FORGOT_PASSWORD_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.FORGOT_PASSWORD_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.FORGOT_PASSWORD_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    default: {
      return state;
    }
  }
}
