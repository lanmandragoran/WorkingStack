var express = require('express');
var app = express();
var router = express.Router();
var shuffle = require('shuffle-array')

var deckIdCount = 0
const deckRegistry = {}


const shuffleDeck = function(){
  let deck = ['AH', 'AS', 'AD', 'AC', 'KH', 'KS', 'KD', 'KC', 'QH', 'QS', 'QD', 'QC', 'JH', 'JS', 'JD', 'JC',
  '10H', '10S', '10D', '10C', '9H', '9S', '9D', '9C', '8H', '8S', '8D', '8C', '7H', '7S', '7D', '7C',
  '6H', '6S', '6D', '6C', '5H', '5S', '5D', '5C', '4H', '4S', '4D', '4C', '3H', '3S', '3D', '3C',
  '2H', '2S', '2D', '2C']
  shuffle(deck)
  return deck 
}

const createDeck = function() {
  let newDeck = shuffleDeck()
  deckIdCount = deckIdCount + 1
  deckRegistry[deckIdCount] = {
    deckId: deckIdCount,
    cardCount: 52,
    shuffled: true,
    deck: newDeck
  }
  return {
    deckId: deckIdCount,
    cardCount: 52,
    shuffled: true,
  }
}

const draw = function(deckId) {
    cardDrawn = deckRegistry[deckId].deck.pop()
    deckRegistry[deckId].cardCount = deckRegistry[deckId].cardCount - 1
    return cardDrawn
}

const registerDeck = function(deck) {
  deckRegistry[deck.deckId.toString()] = deck
}

const getHiddenCards = function(deckId) {
  let secretCardArr = deckRegistry[deckId].deck
  let secretCardObj = {
    hiddenCards: secretCardArr
  }
  return secretCardObj
}
  
  // get new deck
  router.get('/deck', function(req, res) {
    const newDeck = createDeck()
    res.json(newDeck)
  });

  router.get('/deck/:id', function(req, res){
    const cardDrawn = draw(req.params.id)
    const cardObj = {
      card: cardDrawn
    }
    res.json(cardObj)
  })

  router.get('/deck/:id/cardCount', function(req, res){
    const numCards  = {
      cardCount: deckRegistry[req.params.id.toString()].cardCount
    }
    res.json(numCards)
  })

  router.get('/deck/:id/shuffle', function(req, res){
    let tempDeck = deckRegistry[req.params.id.toString()].deck
    shuffle(tempDeck)
    deckRegistry[req.params.id.toString()].deck = tempDeck
    let haveShuffled = {
      shuffled: true
    }
    res.json(haveShuffled)
  })

  router.get('/deck/:id/hiddenCards', function(req, res){
    let hiddenCards = getHiddenCards(req.params.id)
    res.json(hiddenCards)
  })
  
  module.exports = router;