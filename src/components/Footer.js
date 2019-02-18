import React from 'react'
import { Segment, Container } from 'semantic-ui-react';


const Footer = () => {
    return (
        <Segment inverted vertical style={{padding: '5em 0em', marginTop: '10em'}}>
            <Container text>
                this is a footer
            </Container>
        </Segment>
    )
}

export default Footer