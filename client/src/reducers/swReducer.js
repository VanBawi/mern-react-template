import { SW_INIT, SW_UPDATE } from './constants';

const initState = {
  waiting: false,
  activated: false,
  registration: null,
};

const swReducer = (state = initState, action) => {
  switch (action.type) {
    case SW_INIT:
      return {
        ...state,
        activated: true,
      };

    case SW_UPDATE:
      return {
        ...state,
        waiting: true,
        registration: action.payload,
      };

    default:
      return state;
  }
};

export default swReducer;
