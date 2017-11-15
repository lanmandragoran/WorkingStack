import React, { Component } from 'react'
import {connect} from 'react-redux'
import {drawSingleCard, getDeckId} from './actionCreators'
import './App.css'
import Deck from './Deck'

class App extends Component {
	componentDidMount(){
		if(!this.props.deckId){
			this.props.getDeckIdentifier()
		}
	}

	hitPlayer(){
		if(this.props.deckId){
			this.props.getNewCard(this.props.deckId)
		}
		
	}
	render() {
		let cardStr
		if(this.props.card){
			cardStr = this.props.card
		}
		else{
			cardStr = ''
		}
		return (
			<div className="App">
				<h1>Hello</h1>
				DeckID: {this.props.deckId}
				<button onClick={this.hitPlayer.bind(this)}>Hit</button>
				<Deck card={cardStr}/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const newId = state.newId ? state.newId : ''
	const newCard = state.newCard ? state.newCard : ''
	return {
		deckId: newId.deckId,
		card: newCard.card,
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	getDeckIdentifier(){
		dispatch(getDeckId())
	},
	getNewCard(deckId){
		dispatch(drawSingleCard(deckId))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(App)