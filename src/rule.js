var adt = require('adt');

var Suit = adt.enum('club', 'diamond', 'heart', 'spade');

var Rank = adt.enum('ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king');

var Color = adt.enum('red', 'black');

var Property = adt.data({
  Color: { color: adt.only(Color) },
  Suit: { suit: adt.only(Suit) },
  Rank: { rank: adt.only(Rank) },
  Face: null
});

var Rule = adt.data(function() {
  return {
    And: { left: adt.only(this), right: adt.only(this) },
    AtLeastOne: { property: adt.only(Property) },
    All: { property: adt.only(Property) }
  };
});

module.exports = {
  Suit: Suit,
  Rank: Rank,
  Color: Color,
  Property: Property,
  Rule: Rule
};
