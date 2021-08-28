import * as Types from './types';

export const getUser = (state = {}, action) => {
  switch (action.type) {
    case Types.USER:
      return action.payload;
    default:
      return state;
  }
};
