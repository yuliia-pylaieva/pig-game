'use strict';

// Buttons
const newGameButton = document.querySelector('#new-game-button');
const rollButton = document.querySelector('#roll-button');
const holdButton = document.querySelector('#hold-button');

// Play zone
const gameStatus = document.querySelector('#game-status');
const die = document.querySelector('#die');
const rollResult = document.querySelector('#roll-result');

// Player cards (toggle player-card--active / player-card--winner)
const player1 = document.querySelector('#player-1');
const player2 = document.querySelector('#player-2');

// Player status labels
const player1Status = document.querySelector('#player-1-status');
const player2Status = document.querySelector('#player-2-status');

// Total scores
const player1Total = document.querySelector('#player-1-total');
const player2Total = document.querySelector('#player-2-total');

// Current round scores
const player1Current = document.querySelector('#player-1-current');
const player2Current = document.querySelector('#player-2-current');
