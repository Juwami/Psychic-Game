import React, {Fragment} from 'react';

function App() {
	return (
		<Fragment>
			<h1>The Psychic Game</h1>
			<p>Guess what letter I'm thinking of</p>
			<p>Wins:</p>
			<p id="wins-text">0</p>
			<p>Losses:</p>
			<p id="losses-text">0</p>
			<p>Guesses Left:</p>
			<p id="guesses-left">10</p>
			<p>Your Guesses so far:</p>
			<p id="guesses" />
		</Fragment>
	);
}

export default App;
