import { AnyAction, combineReducers } from 'redux';

export interface IState {
  dummy: { test: boolean };
}
const dummyReducer = (
  state: IState['dummy'] = { test: false },
  action: AnyAction
) => {
  switch (action.type) {
    case 'TEST':
      return { ...state, test: !state.test };
    default:
      return state;
  }
};

export default combineReducers({ dummy: dummyReducer });
