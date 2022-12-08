import { useState } from 'react';
import './App.css';

function App() {
	return (
		<div className="wrapper">
			<div id="quote-box">
				<div id="text">Text</div>
				<div id="author">Author</div>
				<a href="https://twitter.com/intent/tweet" id="tweet-quote">
					Tweet Quote
				</a>
				<button id="new-quote">New Quote</button>
			</div>
		</div>
	);
}

export default App;
