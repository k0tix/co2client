import React from 'react'
import {Header} from 'semantic-ui-react'

const style = {
    margin: '1em 0em',
    textAlign: 'center'
}

const SiteHeader = ({title}) => {
    return (
        <div>
            <Header style={style} as='h2'>CO<sup>2</sup>-EMISSIONS</Header>
        </div>
    )
}

export default SiteHeader