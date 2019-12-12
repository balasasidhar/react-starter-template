import { LOADING } from '../action-types';

const STATE_INIT = {
  isLoading: false
};

export default (state = STATE_INIT, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, ...payload };
    default:
      return state;
  }
};
