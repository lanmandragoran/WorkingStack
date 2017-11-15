import React from 'react'

const Deck = props => {
	let cardDisplay
	if (props.card) {
		cardDisplay = <div><h1>{props.card}</h1></div>
	} else {
		cardDisplay = <div><h1>Waiting for Card</h1></div>
	}
	return cardDisplay
}

export default Deck
