import React, { Component } from 'react';

import {  Grid } from 'semantic-ui-react'

import SiteHeader from './components/SiteHeader'
import SearchBar from './containers/SearchBar'
import EmissionChart from './components/EmissionChart'
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div /*style={{backgroundColor: '#2e3238'}}*/>
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
        <Footer></Footer>
      </div>
    )

  }
}

export default App;
