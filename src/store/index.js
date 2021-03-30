import { combineReducers, createStore, applyMiddleware } from 'redux';
import { goodsReducer } from './goodsReducer';
import { cartReducer } from './cartReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  goodsReducer,
  cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
