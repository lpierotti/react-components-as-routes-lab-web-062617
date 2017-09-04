import React from 'react';
import { directors } from '../data';

const Directors = (props) => {
  const directorData = directors.map(director => {
  	return (
  		<div>
  			<p>{director.name}</p>
  			<ul>
  				{director.movies.map(movie => <li>{movie}</li>)}
  			</ul>
  		</div>
  	)
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorData}
    </div>
  );
}

export default Directors
