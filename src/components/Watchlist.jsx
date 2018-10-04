import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getWatchlistMovies } from '../redux/actions/watchlistActions';

class WatchList extends Component {
  componentDidMount() {
    this.props.getWatchlistMovies();
  }

  render() {
  	const { watchlist } = this.props.watchlist;
    return (
      <div>
        <h4 className="title">
	    		My Watchlist

        </h4>
        <div className="movie-container">
          {
	      		watchlist.length ? watchlist.map(movie => (
				  <div key={movie._id}>
				    <Link to={`/movies/${movie.movie_id}`} className="links">
				      {movie.title}
				    </Link>
				  </div>
	      			))
	      		: ''
	      	}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ watchlist }) {
  return {
    watchlist,
  };
}

export default connect(mapStateToProps, { getWatchlistMovies })(WatchList);
