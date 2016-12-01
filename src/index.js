import React from 'react';
import ReactDom from 'react-dom';

//Create a new component. This component should produce some html
// JSX will get turn into html. Get some js to produce html. JSX make component more clean, easy to read
const App = () => {
	return <div>Hello there</div>;
}

// Take this component's generated HTML and put it on the page
ReactDom.render(<App />, document.querySelector('.container'));