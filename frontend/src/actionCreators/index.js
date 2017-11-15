import axios from 'axios'
import {
	GET_NEW_DECK_ID,
	GET_NEW_HAND,
	DRAW_CARD,
	HIT_PLAYER,
	PLAYER_STAY,
	PLAYER_WINS,
	DEALER_WINS,
	PLAYER_BUSTS,
	DEALER_BUSTS,
	DEALER_BLACKJACK,
	ENTER_OPPONENT_NAME,
	ENTER_PLAYER_NAME
} from '../actions'

export function getNewDeckId(deckId) {
	return {
		type: GET_NEW_DECK_ID,
		payload: deckId
	}
}

export function drawCard(card) {
	return {
		type: DRAW_CARD,
		payload: card
	}
}

export function getDeckId() {
	return dispatch => {
		axios
			.get('http://localhost:7167/deck')
			.then(response => {
				dispatch(getNewDeckId(response.data))
			})
			.catch(error => {
				console.error('axios error fetching deckId', error)
			})
	}
}

export function drawSingleCard(deckId) {
	return dispatch => {
		axios
			.get('http://localhost:7167/deck/' + deckId)
			.then(response => {
				dispatch(drawCard(response.data))
			})
			.catch(error => {
				console.error('axios error fetching deck', error)
			})
	}
}