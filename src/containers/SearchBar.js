import React from 'react'
import { connect } from 'react-redux'
import {searchCountry} from '../reducers/countryReducer'
import { togglePerCapita, updateSearchText } from '../actions'
import { Item, Icon, Form, Checkbox, Grid, Divider, Label, Segment, Search } from 'semantic-ui-react'

import EmissionChart from '../components/EmissionChart'

import data from '../test'
import {countryNames} from '../utils/countryList'

class SearchBar extends React.Component {

    handleSearchTextChange = (event) => {
        event.preventDefault()
        this.props.updateSearchText(event.target.value)
        this.props.searchCountry(event.target.value)
    }

    handleSearch = () => {
        this.props.searchCountry(this.props.searchText)
    }

    togglePerCapita = () => {
        this.props.togglePerCapita()
        console.log(this.props.country.name)
    }

    processdata = (values) => {
        var year = 1960
        var emissions = new Array(['Year', 'Emissions'])
        values.forEach(value => {
            emissions.push([`${year}`, value])
            year++
        }
        )

        return emissions
    }

    render() {
        return (
            <Grid centered>
                <Grid.Column style={{ maxWidth: '600px' }}>
                    <Form size='large' onSubmit={this.props.handleSearch} >
                        <Segment>
                            <Form.Field style={{ padding: '1em' }}>
                            <Search fluid
                                size='huge'
                                icon={<Icon name='search' inverted circular link color='blue' />}
                                placeholder='country name...'
                                value={this.props.searchText}
                                onSearchChange={this.handleSearchTextChange}
                                onResultSelect={(event) => console.log(event.currentTarget)}
                                resultRenderer={renderResult}
                                results={
                                    [
                                        {
                                            title: 'moi'
                                        }, {
                                            title: 'hello'
                                        }, {
                                            title: 'noob'
                                        }
                                    ]
                                }/>
                        </Form.Field>
    
                        <Form.Group inline style={{ margin: '1em' }}>
                            <Form.Field>
                                <Checkbox toggle label='per capita' onChange={this.togglePerCapita}/>
                            </Form.Field>
                        </Form.Group>
                        </Segment>
                        
                    </Form>
    
                    <Divider horizontal inverted>OR</Divider>
                    <Segment textAlign='center'>
                        <Label color='pink' size='big'>Choose a country from a map</Label>
                    </Segment>

                    <EmissionChart name={data.country} id={data.code} values={this.processdata(data.values)}>
                        
                    </EmissionChart>
                    
                </Grid.Column>

                    

            </Grid>
        )
    }
}

const renderResult = ({title}) => (
    <Item>{title}</Item>
)

const mapStateToProps = (state) => {
    return {
        searchText: state.searchText,
        perCapita: state.perCapita,
        country: state.country
    }
}

export default connect(
    mapStateToProps, 
    { togglePerCapita, updateSearchText, searchCountry}
)(SearchBar)