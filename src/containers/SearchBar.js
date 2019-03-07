import React from 'react'
import { connect } from 'react-redux'
import { searchCountry } from '../reducers/countryReducer'
import { togglePerCapita, updateSearchText } from '../reducers/searchReducer'
import { Item, Icon, Form, Grid, Search } from 'semantic-ui-react'

class SearchBar extends React.Component {

    handleSearchTextChange = (event) => {
        event.preventDefault()
        this.props.updateSearchText(event.target.value)
    }

    handleSearch = () => {
        this.props.searchCountry(this.props.searchText)
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
                            <Form.Field style={{ padding: '1em' }}>
                            <Search fluid
                                size='big'
                                icon={<Icon name='search' inverted circular link color='blue' />}
                                placeholder='Country name...'
                                value={this.props.searchText}
                                onSearchChange={this.handleSearchTextChange}
                                onResultSelect={this.handleResultSelect}
                                resultRenderer={renderResult}
                                selectFirstResult={true}
                                minCharacters={2}
                                results={this.props.filteredResults}
                            />
                        </Form.Field>                     
                    </Form>                     
                </Grid.Column>
            </Grid>
        )
    }
} 

const renderResult = ({name}) => (
    <Item key={name}>{name}
    </Item>
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