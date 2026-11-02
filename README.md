# Pig - The Dice Game

A two-player, pass-the-device dice game built with plain HTML, CSS and JavaScript.
Build your round score, but roll a one and you lose it all.

## Design

Figma prototype: [Two-Player Pig Dice Game](https://www.figma.com/make/pVUVsITqyxeSwfD5EKuOcv/Two-Player-Pig-Dice-Game?p=f&t=kFbGtufvhMV9yTrQ-0)

## How to play

1. Player 1 starts. Click **Roll dice** to roll the die.
2. Every roll adds to your **round score**, and your total shows the live result.
3. Each round you must roll **three times**. Then the Roll button locks and **Hold score** unlocks.
4. Click **Hold score** to add the round score to your **total** and pass the turn.
5. Roll a **1** and your round points disappear. The 1 stays on screen for a second, then the turn passes.
6. The first player to reach **100** wins.
7. Click **New game** at any time to start over.

See [flowchart.md](flowchart.md) for the full game flow.

## Project structure

| File | Purpose |
|---|---|
| `index.html` | Page markup |
| `style.css` | Styles |
| `selectors-library.js` | DOM selectors and shared constants |
| `game.js` | Game state, rules and event handlers |
| `images/` | Dice faces (`dice-1.svg` to `dice-6.svg`), the `?` die and the favicon |
| `flowchart.md` | Mermaid flowchart of the game logic |

## Running it

Open `index.html` in a browser, or serve the folder with a local server such as the VS Code Live Server extension.
The scripts load in this order: `selectors-library.js`, then `game.js`.

## Game settings

Rules live as constants at the top of `game.js`:

- `WINNING_SCORE` (100)
- `MAX_ROLLS_PER_ROUND` (3)
- `SWITCH_DELAY_MS` (1000)
