import AuthType from '../types/auth';

var initialState = {
  action: false,
  fetching: false,
  error: false,
  cb: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case AuthType.CODEBIRD:
      return {
        ...state,
        cb: action.payload,
        action: AuthType.CODEBIRD,
        error: false,
      };
    case AuthType.PINCODE_ERROR:
      return {
        ...state,
        error: action.payload,
        action: AuthType.PINCODE_ERROR
      };
    default:

      return state;

  }

  return state;
}

