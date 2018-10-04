import React, { Component } from 'react';

import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import SearchMovies from '../components/SearchMovies';
import Watchlist from '../components/Watchlist';
import SeenList from '../components/SeenList';

class Movies extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={6} mdPush={6}>
              <Watchlist />
            </Col>
            <Col md={6} mdPull={6}>
              <SeenList />
            </Col>
          </Row>
        </Grid>
        <SearchMovies />
      </div>
    );
  }
}

export default Movies;
