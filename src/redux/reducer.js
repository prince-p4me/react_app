import * as Types from './types';

export const getRoute = (state = "/", action) => {
  switch (action.type) {
    case Types.ROUTE_NAME:
      return action.payload;
    default:
      return state;
  }
};
