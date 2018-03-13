import React from 'react';
import Home from './components/Home';
import Packages from './components/Packages';
import { Route, Link } from 'react-router-dom';
import CreateItem from './components/CreateItem';

const App = () => (
	<div className="max-w-md mt-8 sm:mt-16 mx-auto px-8">
		<Route path="/" component={CreateItem} />
	</div>
);

export default App;
