import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { cashReducer } from './reducers/cashReducer';
import { customReducer } from './reducers/customerReducer';

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;