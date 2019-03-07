import React from 'react'
import { Segment, Container, Grid, Icon } from 'semantic-ui-react';

const Footer = () => {
    const date = new Date()
    return (
        <Segment inverted vertical style={{padding: '5em 0em', marginTop: '24em'}}>
            <Grid centered columns={2}>
                <Grid.Column width={3}>
                    <Grid.Row>
                        <a href='https://github.com/k0tix/co2server' style={{color: 'white'}}>
                        <Icon name='github' size='huge'></Icon>
                        made by Otto Pirttimaa
                    </a>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default Footer