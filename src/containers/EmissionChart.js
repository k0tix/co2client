import React from 'react'
import { Chart } from 'react-google-charts'
import { Loader, Segment, Dimmer } from 'semantic-ui-react'
import { connect } from 'react-redux';

const EmissionChart = (props) => {
    return (
        <div>
            {props.countries.length < 1 ? <div></div> :
                <Segment raised>
                    <Chart
                        width={'100%'}
                        height={'26em'}
                        loader={
                            <div style={{height: '12em'}}>
                                <Dimmer active>
                                <Loader size='big'>Loading</Loader>
                                </Dimmer>
                            </div>
                        }
                        chartType='LineChart'
                        data={processdata(props)}
                        options={{
                            hAxis: {title: 'Year'},
                            vAxis: {title: props.perCapita ? 'Metric tons per capita' : 'Emission (kt)'}
                        }}
                    />
                </Segment>
            }
        </div>
    )
}


const processdata = (props) => {
        const countries = props.countries.length

        var titles = ['Year']
        props.countries.forEach(country => titles.push(`${country.name}`))

        var emissions = new Array(titles)
        
        props.countries[0].emissions.forEach((value, index) => {
            var data = [value.year, props.perCapita ? parseFloat(value.perCapitaValue) : parseFloat(value.value)]
            for(var i = 1; i < countries; i++) {
                const emission = props.countries[i].emissions[index]
                data.push(props.perCapita ? parseFloat(emission.perCapitaValue) : parseFloat(emission.value))
            }
            emissions.push(data)
        })
            
        return emissions
}

const mapStateToProps = (state) => {
    return {
        perCapita: state.search.perCapita,
        countries: state.country
    }
}

export default connect(
    mapStateToProps
)(EmissionChart)