import React from 'react'

import { Input, Icon, Form, Checkbox, Grid, Divider, Label, Segment } from 'semantic-ui-react'

const SearchBar = () => {
    return (
        <Grid centered>
            <Grid.Column style={{ maxWidth: '600px' }}>
                <Form size='large'>
                    <Segment>
                        <Form.Field style={{ padding: '1em' }}>
                        <Input fluid
                            size='huge'
                            icon={<Icon name='search' inverted circular link color='blue' />}
                            placeholder='country name...' />
                    </Form.Field>

                    <Form.Group inline style={{ margin: '1em' }}>
                        <Form.Field>
                            <Checkbox toggle label='per capita' />
                        </Form.Field>
                    </Form.Group>
                    </Segment>
                    
                </Form>

                <Divider horizontal>OR</Divider>
                <Segment textAlign='center'>
                    <Label color='pink' size='big'>Choose a country from a map</Label>
                </Segment>
                
            </Grid.Column>
        </Grid>
    )
}

export default SearchBar