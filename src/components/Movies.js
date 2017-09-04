import React from 'react';
import { movies } from '../data';

const Movies = (props) => {
  const movieData = movies.map(movie => {
  	return (
	        	<div>
	        		<p>{movie.title}</p>
	        		<p>{movie.time}</p>
	        		<ul>
	        			{movie.genres.map(genre => <li>{genre}</li>)}
	        		</ul>
	        	</div>
        	)
  })
  return (
    <div>
        <h1>Movies Page</h1>
        {movieData}
    </div>
  );
};

export default Movies;
