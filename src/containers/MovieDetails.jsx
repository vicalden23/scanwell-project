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
    let formatMoney = (num) => {
      return (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

    }
    console.log(details)
    return (
      <div className='movie-details-container'>
        <Grid>
          <Row>
            <Col md={6} mdPush={6}>
              <img src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} />
              <p className='tagline'>
                "{details.tagline}"
              </p>
            </Col>
            <Col md={6} mdPull={6}>
              <h4 className='movie-details-right-section'>
                {details.original_title}, {details.release_date}
              </h4>
              <p>
                {details.overview}
              </p>
              <h5 className='rate-count'>
                {details.vote_average}/10 ({details.vote_count} votes)
              </h5>
              <p>
                Genres: {genres.join(', ')}
              </p>
              <p>
                Budget: { details.budget ? `$${formatMoney(details.budget)}` : ''}
              </p>
              <p>
                Revenue: { details.revenue ? `$${formatMoney(details.revenue)}` : ''}
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
