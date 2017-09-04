import React from 'react';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
  	<div>
    <Router>
      <div>
	      <NavBar />
	      <Route exact path='/' render={() => <Home props={props.data}/>}/>
	      <Route exact path='/movies' render={() => <Movies movieList={props.data.movies}/>}/>
	      <Route exact path='/directors' render={() => <Directors directorList={props.data.directors}/>}/>
	      <Route exact path='/actors' render={() => <Actors actorList={props.data.actors}/>} />
      </div>
    </Router>
    </div>
  );
};

export default App
