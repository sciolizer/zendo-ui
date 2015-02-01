//var adt = require('adt');
//var assert = require('assert');
//var types = require('../src/rule');
//
//
//var ranks = {
//  A: types.Rank.ace,
//  '2': types.Rank.two,
//  '3': types.Rank.three,
//  '4': types.Rank.four,
//  '5': types.Rank.five,
//  "6": types.Rank.six,
//  '7': types.Rank.seven,
//  '8': types.Rank.eight,
//  '9': types.Rank.nine,
//  T: types.Rank.ten,
//  J: types.Rank.jack,
//  Q: types.Rank.queen,
//  K: types.Rank.king
//};
//
//console.log(ranks);
////console.log(ranks[6]);
//
////fail();
//
//console.log("hello" instanceof types.Rule.And);
//
//var myEnum = adt.enum('one', 'two');
//
//
//
////console.log(myEnum[0].toString());
//
//console.log(myEnum['one'].toString());
//
//console.log(myEnum.one.isone);
//
//assert(myEnum.one == myEnum.one);
//
//assert(myEnum.one instanceof myEnum);
//
//var Maybe = adt.data({
//  Nothing: null,
//  Just: { just: adt.any }
//});
//
//var DoubleNames = adt.data({
//  Left: { property: adt.any },
//  Right: { property: adt.only(Maybe), cloperty: adt.any }
//});
//
//console.log(DoubleNames.Right(Maybe.Nothing, "hfl").toString());
//
//var just = Maybe.Just(3);
//
//console.log(just.just);
//
//var Wrapper = adt.data({
//  Likely: null,
//  Basically: { basically: adt.only(Maybe) }
//});
//
////Wrapper.Likely;
//var grief = Wrapper.Basically(Maybe.Just(42));
//console.log(grief);
//
//
////var theMaybe = adt.only(Maybe);
////var Unsealed = adt.data();
////Unsealed.type("Likely");
////Unsealed.type('Basically', theMaybe);
////adt.data({
////  Likely: adt.any,
////  Basically: theMaybe
////});
//describe('Just', function() {
//  var noth = Maybe.Nothing;
//  var just = Maybe.Just(42);
//  it('should be an instance of just', function() {
//    assert(just instanceof Maybe.Just);
//    console.log(just);
//    console.log(typeof just);
//    console.log(just.constructor);
//    console.log(just.isNothing);
//    //assert(just.IsJust);
//    //console.log("hello");
//  });
//});
//describe('type inside type', function() {
//  console.log("entering describe");
//  console.log(Maybe);
//  var numbers = adt.only(Number);
//  console.log(numbers(5));
//  //console.log(numbers("hello"));
//  //console.log("unreachable");
//});
