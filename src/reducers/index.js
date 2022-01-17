import {combineReducers} from 'redux';
import { createStore , applyMiddleware} from 'redux';
import infoReducer from './infoReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    repos: infoReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));