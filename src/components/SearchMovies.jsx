import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Button,
  FormGroup,
  FormControl,
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import { searchMovies } from '../redux/actions/searchActions';
import { addToWatchlist } from '../redux/actions/watchlistActions';
import { addToSeen } from '../redux/actions/seenActions';

import '../containers/App.css';

class SearchMovies extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchChange() {
    this.setState({
      title: this.title.value,
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const query = this.state.title.split(' ').join('+');
    this.props.searchMovies(query);
  }

  addToWatchlist(id, title) {
    this.props.addToWatchlist({
      movie_id: id,
      title,
    });
  }

  addToSeen(id, title) {
    this.props.addToSeen({
      movie_id: id,
      title,
    });
  }

  render() {
    const { search } = this.props.search;
    return (
      <div className="container">
        <div>
          <form>
            <Grid>
              <Row>
                <Col xs={12} md={8}>
                  <FormGroup>
                    <FormControl
                      className="search-input"
                      componentClass="input"
                      inputRef={input => this.title = input}
                      onChange={this.handleSearchChange}
                      placeholder="Enter Title"
                    />
                  </FormGroup>
                </Col>

                <Col xs={6} md={4}>
                  <Button
                    className="submit-button"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Search Movies
                  </Button>
                </Col>
              </Row>
            </Grid>
          </form>

          <div>
            {
              search.length ? search.map(movie => (
                <div
                  className="movie-searches-container"
                  key={movie.id}
                >
                  <h4>
                    <Link to={`/movies/${movie.id}`} className="links">
                      {movie.original_title}, {movie.release_date.substr(0, 4)}
                    </Link>
                  </h4>
                  <p>
                    {movie.overview}
                  </p>
                  <Button
                    className="watchlist-button"
                    data-movie-id={movie.id}
                    onClick={this.addToWatchlist.bind(this, movie.id, movie.original_title)}
                  >
                      Add To Watchlist
                  </Button>
                  <Button
                    className="seen-button"
                    onClick={this.addToSeen.bind(this, movie.id, movie.original_title)}
                  >
                      I've Seen It!
                  </Button>
                </div>
              ))
                : ''
            }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ search }) {
  return {
    search,
  };
}

export default connect(mapStateToProps, { searchMovies, addToWatchlist, addToSeen })(SearchMovies);
