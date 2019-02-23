import React from 'react'
import { Chart } from 'react-google-charts'
import { Loader, Segment, Dimmer } from 'semantic-ui-react'

const EmissionChart = ({name, id, values, perCapita}) => {
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
                data={values}
                options={{
                    title: `${name} (${id})`,
                    hAxis: {title: 'Year'},
                    vAxis: {title: 'Emission (kt)'}
                }}
            />
            </Segment>
            
        </div>
    )
}

export default EmissionChart