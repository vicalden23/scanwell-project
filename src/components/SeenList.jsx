import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSeenMovies } from '../redux/actions/seenActions';

class SeenList extends Component {

	componentDidMount() {
		this.props.getSeenMovies()
	}

  render() {
  	const { seen } = this.props.seen
    return (
      <div>
      	{
      		seen.length ? seen.map((movie) => {
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

function mapStateToProps({ seen }) {
  return {
    seen,
  };
}

export default connect(mapStateToProps, { getSeenMovies })(SeenList);