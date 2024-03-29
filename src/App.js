import React, { Component } from 'react';

import {  Grid, Container } from 'semantic-ui-react'

import SiteHeader from './components/SiteHeader'
import EmissionChart from './containers/EmissionChart'
import Footer from './components/Footer';
import { connect } from 'react-redux';
import { resultInitialization } from './reducers/searchReducer'
import CountrySelector from './containers/CountrySelector';
import CountryBar from './containers/CountryBar';

class App extends Component {

  componentDidMount = async () => {
    this.props.resultInitialization()
  }

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
            <Grid.Column style={{maxWidth: 600}}>
              <CountryBar />
              <CountrySelector></CountrySelector>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column style={{maxWidth: '800px'}}>
              <Container >
                <EmissionChart></EmissionChart>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer></Footer>
      </div>
    )

  }
}

export default connect(
  null,
  { resultInitialization }
)(App)