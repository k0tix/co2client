import React from 'react'
import { connect } from 'react-redux'
import { Label, Icon } from 'semantic-ui-react'

import { removeCountry } from '../reducers/countryReducer'


const CountryBar = (props) => (
    <div>
        {props.countries.map(country => 
            <Label style={{margin: '2px'}} key={country.name} onClick={() => props.removeCountry(country.code)}>
                {country.name}
                <Icon name='delete'></Icon>
            </Label>
        )}
    </div>
)

const mapStateToProps = (state) => {
    return {
        countries: state.country
    }
}

export default connect(
    mapStateToProps,
    { removeCountry }
)(CountryBar)
