import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getWatchlistMovies } from '../redux/actions/watchlistActions';

class WatchList extends Component {

	componentDidMount() {
		this.props.getWatchlistMovies()
	}

  render() {
  	const { watchlist } = this.props.watchlist
  	console.log(watchlist)
    return (
      <div>
      	{
      		watchlist.length ? watchlist.map((movie) => {
      			return (
      				<div key={movie._id}>
		      			<p>
		      				{movie.title}
		      			</p>
		      		</div>
      			)
      		})
      		: ''
      	}
      </div>
    )
  }
}

function mapStateToProps({ watchlist }) {
  return {
    watchlist,
  };
}

export default connect(mapStateToProps, { getWatchlistMovies })(WatchList);