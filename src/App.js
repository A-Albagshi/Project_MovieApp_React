import { Route, Switch } from 'react-router-dom';
import './App.css';
import Movie from './Components/Movie';
import SelectedMovie from './Components/SelectedMovie';
import NavbarComponent from './Components/NavbarComponent';
import TopMovies from './Components/TopMovies';
import Results from './Components/Results';

function App() {
	return (
		<>
			<NavbarComponent />
			<div className='container-fluid mt-4'>
				<Switch>
					<Route key='movies' exact path='/' component={Movie} />
					<Route key='tv' exact path='/tv' component={Movie} />
					<Route
						key='movies'
						exact
						path='/movie/:id'
						component={SelectedMovie}
					/>
					<Route key='tv' exact path='/tv/:id' component={SelectedMovie} />
					<Route exact path='/top-rated' component={TopMovies} />
				</Switch>
				<Switch>
					<Route exact path='/results' component={Results} />
					<Route
						exact
						path='/results/:id?/:mediaType?'
						component={SelectedMovie}
					/>
				</Switch>
			</div>
		</>
	);
}

export default App;
