ui = require('./ui');
window.ui = ui;

var markedKoans = [];

var clickie;

var onKoanKeydown, onKoanEnter;

var components = {
  koan: {
    clear: function(){},
    onKeydown: function(f){ onKoanKeydown = f; },
    onEnter: function(f){ onKoanEnter = f; },
    showHelp: function(help){
      console.log("showing help", help);
      $('#koan-help').html(help);
    }
  },
  koans: {
    add: function(koan, mark) {
      markedKoans.push({koan:koan,mark:mark});
      if (markedKoans.length === 1) {
        console.log("i am here");
        console.log('koan', koan, 'mark', mark);
        if (!mark) {
          throw new Error("First koan should always be a true koan");
        }
        $('#trueKoan').html(koan.join(' '));
      } else if (markedKoans.length === 2) {
        console.log("i am in second");
        if (mark) {
          throw new Error("Second koan should always be a false koan");
        }
        $('#falseKoan').html(koan.join(' '));
      }
      console.log("add", koan, mark);
      //document.getElementById('#sugar').innerHTML
      //$('#sugar').add()
    },
    clear: function() {
      markedKoans = [];
    }
  },
  rule: {
    clear: function(){},
    onKeydown: function(){},
    onEnter: function(){}
  },
  paraphrases: {
    set: function(){}
  },
  suggestions: {
    set: function(){},
    error: function(){}
  },
  quit: {
    onClick: function(){}
  },
  newGame: {
    onClick: function(c){clickie = c;}
  },
  winlose: {
    win: function(){},
    lose: function(){}
  }
};

window.components = components;

ui.initialize(components);

$('#koan-entry').on('input', function(e) {
  console.log('e', e);
  var koan = $('#koan-entry').val();
  console.log('koan', koan);
  if (e.keyCode == 13) {
    onKoanEnter(koan);
    return false;
  } else {
    onKoanKeydown(koan);
    return true;
  }
});

console.log('clickie', clickie);
clickie();
