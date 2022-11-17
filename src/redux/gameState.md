What to be kept track of?

- State of the current player: coins, cards, alive or dead, active or not
- State of the opponent: coins, handSize, alive or dead, active or not
- State of an action
  - executor
  - target
- State of the game
  - continue or ended
  - winner
- Remaining cards in the deck. Don't show on frontend, just show the number
  - kept this in backend

Back end database store everything

- Game: based on game_id
- Deck: List of remaining cards in order
- Player: player_id reference game_id + list of card_id
- Card: has card_id
