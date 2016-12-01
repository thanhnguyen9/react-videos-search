import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

//Create a new component. This component should produce some html
// JSX will get turn into html. Get some js to produce html. JSX make component more clean, easy to read
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Take this component's generated HTML and put it on the page
ReactDom.render(<App />, document.querySelector('.container'));