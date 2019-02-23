import React from 'react'
import { connect } from 'react-redux'
import {searchCountry} from '../reducers/countryReducer'
import { togglePerCapita, updateSearchText } from '../reducers/searchReducer'
import { Item, Icon, Form, Checkbox, Grid, Divider, Label, Segment, Search, Container } from 'semantic-ui-react'

import EmissionChart from '../components/EmissionChart'

import data from '../test'

class SearchBar extends React.Component {

    handleSearchTextChange = (event) => {
        event.preventDefault()
        this.props.updateSearchText(event.target.value)
    }

    handleSearch = () => {
        this.props.searchCountry(this.props.searchText)
    }

    togglePerCapita = () => {
        this.props.togglePerCapita()
    }

    processdata = (values) => {
        /*var year = 1960
        var emissions = new Array(['Year', 'Emissions'])
        values.forEach(value => {
            emissions.push([`${year}`, value])
            year++
        }
        )

        return emissions*/
        var emissions = new Array(['Year', 'Emission'])
        values.forEach(value => {
            emissions.push([value.year, parseInt(value.value)])
        })
        return emissions
    }

    handleResultSelect = (event, { result }) => {
        this.props.updateSearchText(result.name)
        this.props.searchCountry(result.code)
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
                                onResultSelect={this.handleResultSelect}
                                resultRenderer={renderResult}
                                selectFirstResult={true}
                                minCharacters={2}
                                results={this.props.filteredResults}
                            />
                        </Form.Field>
    
                        <Form.Group inline style={{ margin: '1em' }}>
                            <Form.Field>
                                <Checkbox toggle label='per capita' onChange={this.togglePerCapita} onClick={() => console.log(this.props)}/>
                            </Form.Field>
                        </Form.Group>
                        </Segment>
                        
                    </Form>
    
                    <Divider horizontal>OR</Divider>
                    <Segment textAlign='center'>
                        <Label color='pink' size='big'>Choose a country from a map</Label>
                    </Segment>

            <Container fluid>

            
                    {this.props.country.emissions === undefined ? null : 
                        <EmissionChart name={this.props.country.name} id={this.props.country.code} values={this.processdata(this.props.country.emissions)}>
                        </EmissionChart>

                    }
               </Container>                             
                </Grid.Column>

                    
            </Grid>
        )
    }
}

const renderResult = ({name}) => (
    <Item key={name}>{name}</Item>
)

const filterResults = (results, text) => {
    return results.filter(result => result.name.toLowerCase().includes(text.toLowerCase())).map(value => {
        var newValue = {
            ...value,
            title: value.name,
            key: value.code
        }

        return newValue
    })
}


const mapStateToProps = (state) => {
    return {
        searchText: state.search.searchText,
        perCapita: state.search.perCapita,
        filteredResults: filterResults(state.search.results, state.search.searchText),
        country: state.country
    }
}

export default connect(
    mapStateToProps, 
    { togglePerCapita, updateSearchText, searchCountry}
)(SearchBar)