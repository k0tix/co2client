import { UPDATE_SEARCHTEXT, TOGGLE_PERCAPITA } from '../actions'

const initialState = {
    searchText: '',
    perCapita: false
}

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_SEARCHTEXT:
            return Object.assign({}, state, {searchText: action.text})
        case TOGGLE_PERCAPITA:
            return {...state, perCapita: !state.perCapita}
        default: 
            return state
    }
}

export default searchReducer