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

/*
koans:
  add :: String -> Bool -> IO ()
  clear :: IO ()
koan:
  on-keydown :: (String -> IO ()) -> IO ()
  on-enter :: IO () -> IO () -- clicking Mark also counts as clicking enter.
  show-help :: String -> IO ()
rule:
  on-keydown :: (String -> IO ()) -> IO ()
  on-enter :: (String -> IO ()) -> IO ()
paraphrases:
  set :: [String] -> IO ()
  clear :: IO ()
suggestions:
  set :: [String] -> IO ()
  error :: String -> IO ()
quit:
  on-click :: IO () -> IO ()
new-game:
  on-click :: (Int {- difficulty -} -> IO ()) -> IO ()
winlose:
  win :: Stats -> IO ()
  lose :: String {- solution -} -> IO ()
*/
module.exports = {
}
