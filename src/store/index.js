import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const middleware = applyMiddleware(reduxThunk)

export default createStore(rootReducer, composeWithDevTools(middleware));