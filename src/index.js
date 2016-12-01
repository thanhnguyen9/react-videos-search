import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

//Create a new component. This component should produce some html
// JSX will get turn into html. Get some js to produce html. JSX make component more clean, easy to read
class App extends Component {
	constructor(props){
		super(props);

		this.state = { videos: []};

		YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
			this.setState({ videos });
		});
	}

	render(){
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// Take this component's generated HTML and put it on the page
ReactDom.render(<App />, document.querySelector('.container'));