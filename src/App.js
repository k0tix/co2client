import React, { Component } from 'react';

import {  Grid } from 'semantic-ui-react'

import SiteHeader from './components/SiteHeader'
import SearchBar from './components/SearchBar'

class App extends Component {
  render() {
    return (
      <div>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
              <SiteHeader title={'CO2-EMISSIONS'}></SiteHeader>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <SearchBar></SearchBar>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )

  }
}

export default App;
