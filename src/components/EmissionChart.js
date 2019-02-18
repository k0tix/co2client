import React from 'react'
import { Chart } from 'react-google-charts'
import { Loader, Segment } from 'semantic-ui-react'

const EmissionChart = ({name, id, values}) => {
    return (
        <div style={{display: 'flex'}}>
            <Segment raised>
                <Chart
                width={400}
                height={300}
                loader={
                    <div>
                       loading
                    </div>
                }
                chartType='LineChart'
                data={values}
                options={{
                    title: `${name} (${id})`,
                    hAxis: {title: 'Year'},
                    vAxis: {title: 'Emission'}
                }}
            />
            </Segment>
            
        </div>
    )
}

export default EmissionChart