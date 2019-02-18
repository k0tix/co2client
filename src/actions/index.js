export const UPDATE_SEARCHTEXT = 'UPDATE_SEARCHTEXT'
export const TOGGLE_PERCAPITA = 'TOGGLE_PERCAPITA'
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY'

export const updateSearchText = text => ({
    type: UPDATE_SEARCHTEXT,
    text
})

export const togglePerCapita = () => ({
    type: TOGGLE_PERCAPITA
})