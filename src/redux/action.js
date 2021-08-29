import * as Types from './types';

export function setRoute(payload) {
  return {
    type: Types.ROUTE_NAME,
    payload,
  };
}


// add another actions further
