// Generated by LiveScript 1.3.1
var ref$, all, any, evaluateTop, evaluateProperty, evaluateSuit, evaluateRank, evaluateColor;
ref$ = require('prelude-ls'), all = ref$.all, any = ref$.any;
var types = require('./rule')
evaluateTop = function(rule, cards){
  var evaluator;
  if (rule.isAnd) {
    return evaluateTop(rule.left, cards) && evaluateTop(rule.right, cards);
  } else if (rule.isAll) {
    evaluator = function(card){
      return evaluateProperty(rule.property, card);
    };
    return all(evaluator, cards);
  } else if (rule.isAtLeastOne) {
    evaluator = function(card){
      return evaluateProperty(rule.property, card);
    };
    return any(evaluator, cards);
  } else {
    throw new Error("Don't know how to process rule.");
  }
};
evaluateProperty = function(property, card){
  var result;
  if (property.isSuit) {
    return evaluateSuit(property.suit, card);
  } else if (property.isRank) {
    return evaluateRank(property.rank, card);
  } else if (property.isColor) {
    result = evaluateColor(property.color, card);
    return result;
  } else {
    throw new Error("Don't understand that property.");
  }
};
evaluateSuit = function(suit, card){
  var cardSuit = card.slice(-1)[0];
  if (suit.isclub) {
    return cardSuit === 'C';
  } else if (suit.isdiamond) {
    return cardSuit === 'D';
  } else if (suit.isheart) {
    return cardSuit === 'H';
  } else if (suit.isspade) {
    return cardSuit === 'S';
  } else {
    throw new Error("Don't understand suit.");
  }
};
evaluateRank = function(rank, card){
  var ranks = {
    A: types.Rank.ace,
    '2': types.Rank.two,
    '3': types.Rank.three,
    '4': types.Rank.four,
    '5': types.Rank.five,
    '6': types.Rank.six,
    '7': types.Rank.seven,
    '8': types.Rank.eight,
    '9': types.Rank.nine,
    T: types.Rank.ten,
    J: types.Rank.jack,
    Q: types.Rank.queen,
    K: types.Rank.king
  };
  var cardRank = ranks[card[0]];
  if (cardRank == void 8) {
    throw new Error("Unrecognized rank: " + card[0]);
  }
  return rank.equals(cardRank);
};
evaluateColor = function(color, card){
  var suit;
  suit = card.slice(-1)[0];
  if (color.isred) {
    return suit === 'H' || suit === 'D';
  } else if (color.isblack) {
    return suit === 'C' || suit === 'S';
  } else {
    throw new Error("Don't understand color: " + color);
  }
};
module.exports = {
  evaluateTop: evaluateTop
};
