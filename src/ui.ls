$ = require \jquery
zendo = require \zendo-js

rule = zendo.random-rule()

game = new zendo.Game(rule)

console.log \game, game

rule-input = $ '#rule-input'

on-rule-input-change = ->
  next-words-list = $ '#next-words-list'
  line = rule-input.val()
  translation = zendo.translate line
  # todo: escape <space> and <enter>!
  html = ""
  for word in translation.suggestions
    html := html + " #word" #<li class='list-group-item'>#word</li>"
  next-words-list.html(html)
  interpretations-html = ""
  for sentence in translation.paraphrases
    interpretations-html := interpretations-html + "<li class='list-group-item'>#sentence</li>"
  $('#other-interpretations').html(interpretations-html)

rule-input.on 'input', on-rule-input-change
