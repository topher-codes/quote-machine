import { useState } from 'react';
import axios from 'axios';

function App() {
	const [joke, setJoke] = useState('Click the button for a joke');
	const [author, setAuthor] = useState('-Author');
	const handleClick = async () => {
		const joke = await axios.get('https://api.chucknorris.io/jokes/random');
		const name = await axios.get('https://randomuser.me/api/');
		setAuthor(name.data.results[0].name.first);
		setJoke(joke.data.value);
	};

	return (
		<div className="wrapper">
			<div id="quote-box">
				<div id="text">{joke}</div>
				<div id="author">-{author}</div>
				<a href="https://twitter.com/intent/tweet" id="tweet-quote">
					Tweet Quote
				</a>
				<button id="new-quote" onClick={handleClick}>
					New Quote
				</button>
			</div>
		</div>
	);
}

export default App;
