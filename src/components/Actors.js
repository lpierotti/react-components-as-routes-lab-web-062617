import React from 'react';
import { actors } from '../data';

const Actors = (props) => {
  const actorData = actors.map(actor => {
  	return (
  		<div>
  			<p>{actor.name}</p>
  			<ul>
  				{actor.movies.map(movie => <li>{movie}</li>)}
  			</ul>
  		</div>
  	)
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorData}
    </div>
  );
};

export default Actors;
