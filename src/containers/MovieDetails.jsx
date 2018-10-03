import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

import { fetchMovieDetails } from '../redux/actions/movieDetailsActions';

import './App.css';

class MovieDetails extends Component {

  componentDidMount() {
    this.props.fetchMovieDetails(this.props.match.params.id)
  }

  render() {
    const { details } = this.props.details
    const genres = []
    details.genres ? details.genres.forEach((genre) => {
      genres.push(genre.name)
    }) : ''
    console.log(details)
    return (
      <div className='movie-details-container'>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <img src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} />
              <p className='tagline'>
                "{details.tagline}"
              </p>
            </Col>
            <Col xs={12} md={8} className='movie-overview'>
              <h4>
                {details.original_title}, {details.release_date}
              </h4>
              <p>
                {details.overview}
              </p>
              <p>
                Genres: {genres.join(', ')}
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps({ details }) {
  return {
    details,
  };
}

export default connect(mapStateToProps, { fetchMovieDetails })(MovieDetails);
