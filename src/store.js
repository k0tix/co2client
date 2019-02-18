import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import searchReducer from './reducers/searchReducer'
import countryReducer from './reducers/countryReducer'

const reducer = combineReducers({
    search: searchReducer,
    country: countryReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store