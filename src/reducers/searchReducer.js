import { UPDATE_SEARCHTEXT, TOGGLE_PERCAPITA, INIT_SEARCH_RESULTS } from '../actions'

import countryService from '../services/countries'

const initialState = {
    searchText: '',
    perCapita: false,
    results: []
}

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_SEARCHTEXT:
            return Object.assign({}, state, {searchText: action.text})
        case TOGGLE_PERCAPITA:
            return {...state, perCapita: !state.perCapita}
        case INIT_SEARCH_RESULTS:
            return {...state, results: action.results}
        default: 
            return state
    }
}

export const resultInitialization = () => {
    return async(dispatch) => {
        const results = await countryService.getAll()
        dispatch({
            type: INIT_SEARCH_RESULTS,
            results
        })
    }
}

export const updateSearchText = (text) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_SEARCHTEXT,
            text
        })
    }
}

export const togglePerCapita = () => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_PERCAPITA
        })
    }
}

export default searchReducer