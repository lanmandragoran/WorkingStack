import { combineReducers } from 'redux'
import { GET_NEW_DECK_ID, GET_NEW_HAND, DRAW_CARD } from '../actions'

const newId = (state = {}, action) => {
	if (action.type === GET_NEW_DECK_ID) {
		return Object.assign(
			{},
			{
				...state,
				deckId: action.payload.deckId
			}
		)
	}
	return state
}

const newCard = (state = {}, action) => {
	if (action.type === DRAW_CARD) {
		return Object.assign(
			{},
			{
				...state,
				card: action.payload.card
			}
		)
	}
	return state
}

const rootReducer = combineReducers({ newId, newCard })
export default rootReducer
