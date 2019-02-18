import countryService from '../services/countries'

import { SEARCH_COUNTRY } from '../actions'

const initialState = {
    country: {}
}

const countryReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_COUNTRY:
            return action.country
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

export default countryReducer