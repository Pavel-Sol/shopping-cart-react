import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer';
import { cartReducer } from './cartReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  reducer,
  cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
