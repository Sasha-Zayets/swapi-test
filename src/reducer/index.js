import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import userReducer from './user';
import peopleReducer from './people';

const rootReducer = combineReducers({
  user: userReducer,
  people: peopleReducer,
});


let middleware = [
  reduxThunk,
];

const processNode = process.env.NODE_ENV;
if (processNode === 'development') {
  middleware = [...middleware, reduxLogger];
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
