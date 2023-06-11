import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {createStore,combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'

const feedBackList = (state = [], action) => {

    if(action.type === 'SET_FEED'){
        return action.payload
    } 
    return state
}

const feedStore = createStore(
    combineReducers({
        feedBackList
    }), applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {feedStore}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </Provider> 
);
