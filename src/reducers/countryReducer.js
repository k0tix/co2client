import countryService from '../services/countries'

import { SEARCH_COUNTRY, REMOVE_COUNTRY } from '../actions'

const initialState = []

const countryReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_COUNTRY:
            if(state.filter(country => country.code === action.country.code).length !== 0) return state
            return state.concat([action.country])
        case REMOVE_COUNTRY:
            return state.filter(country => country.code !== action.code)
        default: 
            return state
    }
}

export const searchCountry = (code) => {
    return async(dispatch) => {
        const country = await countryService.getWithCode(code)
        dispatch({
            type: SEARCH_COUNTRY,
            country
        })
    }
}

export const removeCountry = (code) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_COUNTRY,
            code
        })
    }
}

export default countryReducer