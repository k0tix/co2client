import React from 'react'
import { Tab, Checkbox, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { togglePerCapita } from '../reducers/searchReducer'

import SearchBar from './SearchBar'
import CountryList from './CountryList';

const CountrySelector = (props) => (
    <div>
        <Tab menu={{secondary: true, pointing: true, color: 'blue'}} 
        panes={[
            {menuItem: 'Search', render: () => <Tab.Pane attached={false}><SearchBar/> <PerCapitaToggle props={props}/></Tab.Pane>},
            {menuItem: 'Selector', render: () => <Tab.Pane attached={false}><CountryList/> <PerCapitaToggle props={props} /></Tab.Pane>}
        ]}/>
    </div>
)

const PerCapitaToggle = ({props}) => (
                <Checkbox toggle label='per capita' onChange={() => props.togglePerCapita()} />
)


export default connect(null, {togglePerCapita})(CountrySelector)