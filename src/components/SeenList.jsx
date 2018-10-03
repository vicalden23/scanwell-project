import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getSeenMovies } from '../redux/actions/seenActions';
import '../containers/App.css';

class SeenList extends Component {

	componentDidMount() {
		this.props.getSeenMovies()
	}

  render() {
  	const { seen } = this.props.seen
    console.log(seen)
    return (
      <div>
        <h4 className='title'>
          Seen it!
        </h4>
        <div className='movie-container'>
        	{
        		seen.length ? seen.map((movie) => {
        			return (
  	      			<div key={movie._id}>
                  <Link to={`/movies/${movie.movie_id}`}>
                    {movie.title}
                  </Link>
                </div>
        			)
        		})
        		: ''
        	}
        </div>
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