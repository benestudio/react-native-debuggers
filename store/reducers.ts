import { AnyAction, combineReducers } from 'redux';

const dummyReducer = (state = { test: false }, action: AnyAction) => {
  switch (action.type) {
    case 'TEST':
      return { ...state, test: !state.test };
    default:
      return state;
  }
};

export default combineReducers({ dummy: dummyReducer });
