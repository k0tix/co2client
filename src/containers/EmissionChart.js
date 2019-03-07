import React from 'react'
import { Chart } from 'react-google-charts'
import { Loader, Segment, Dimmer, Transition } from 'semantic-ui-react'
import { connect } from 'react-redux';

const EmissionChart = (props) => {
    if(props.country.emissions === undefined) {
        return (
            <div></div>
        )
    } else {
    return (
        <div>
            <Segment raised>
                <Chart
                width={'100%'}
                height={'18em'}
                loader={
                    <div style={{height: '8em'}}>
                    <Dimmer active>
                    <Loader size='big'>Loading</Loader>
                  </Dimmer>
                  </div>
                }
                chartType='LineChart'
                data={processdata(props)}
                options={{
                    title: `${props.country.name} (${props.country.code})`,
                    hAxis: {title: 'Year'},
                    vAxis: {title: props.perCapita ? 'Metric tons per capita' : 'Emission (kt)'}
                }}
            />
            </Segment>
            
        </div>
    )
            }
}   

const processdata = (props) => {
    const sideString = props.perCapita ? 'Metric tons per capita' : 'Emission'
        var emissions = new Array(['Year', sideString])
        props.country.emissions.forEach(value => {
            emissions.push([value.year, props.perCapita ? parseFloat(value.perCapitaValue) : parseFloat(value.value)])
        })
        return emissions
}

const mapStateToProps = (state) => {
    return {
        perCapita: state.search.perCapita,
        country: state.country
    }
}

export default connect(
    mapStateToProps
)(EmissionChart)