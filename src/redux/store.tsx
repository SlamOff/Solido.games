import { rootReducer } from './index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// const store = createStore(leaguesReducer, leaguesState, composeWithDevTools());
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;