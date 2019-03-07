import React, { useState } from 'react'
import { Segment, Header, Button, List, Icon, Popup } from 'semantic-ui-react'
import { searchCountry } from '../reducers/countryReducer'
import { connect } from 'react-redux'


const CountryList = (props) => {

    const [selector, setSelector] = useState('population')

    return (
        <div>
            <Header as='h2'>
                Choose from an ordered list
            </Header>             
            <Button.Group>
                <Button color='pink' onClick={() => setSelector('population')}>
                    population  
                    <Popup   
                    trigger={<Icon name='info circle' style={{marginLeft: '1em'}}/>}
                    content='Select an area based on population. Order is from highest to lowest'
                    on='hover'  />
                </Button>
                <Button.Or/>
                <Button color='teal' onClick={() => setSelector('percapita')}>
                    per capita value
                    <Popup   
                    trigger={<Icon name='info circle' style={{marginLeft: '1em'}}/>}
                    content='Select an area based on per capita value. Order is from highest to lowest'
                    on='hover'  />
                </Button>
            </Button.Group>
            <Segment raised color='blue' style={{height: '350px', margin: '2em 0em 2em 0em'}}>
                <List style={{height: '100%', overflow: 'auto'}} divided animated selection>
                    {
                    (selector === 'population' ?
                    props.byPopulation :
                    props.byPerCapita).map(value => (

                    <List.Item key={value.name} onClick={() => props.searchCountry(value.code)}>
                        <Header as='h3'>{value.name}</Header>
                    </List.Item>

                    ))}
                </List>
                </Segment>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        byPopulation: state.search.byPopulation,
        byPerCapita: state.search.byPerCapita    
    }
}

export default connect(
    mapStateToProps,
    { searchCountry }
    )(CountryList)