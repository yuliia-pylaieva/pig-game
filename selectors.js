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

// ---------------------------------------------------------------
// Class selectors and other elements
// ---------------------------------------------------------------

// Layout
const gameShell = document.querySelector('.game-shell');
const topbar = document.querySelector('.topbar');
const gameArea = document.querySelector('.game-area');
const board = document.querySelector('.board');
const footer = document.querySelector('footer');
const footerLine = document.querySelector('.footer-line');

// Topbar
const brand = document.querySelector('.brand');
const brandMark = document.querySelector('.brand-mark');
const goal = document.querySelector('.goal');
const goalScore = document.querySelector('.goal strong'); // 100

// Intro
const intro = document.querySelector('.intro');
const kicker = document.querySelector('.kicker');
const heading = document.querySelector('h1');

// Rules
const rules = document.querySelector('.rules');
const rulesTitle = document.querySelector('.rules-title');

// Play zone
const playZone = document.querySelector('.play-zone');
const actions = document.querySelector('.actions');

// Repeated per player (NodeLists: index 0 = player 1, index 1 = player 2)
const playerCards = document.querySelectorAll('.player-card');
const playerHeadings = document.querySelectorAll('.player-heading');
const playerNumbers = document.querySelectorAll('.player-number');
const playerNames = document.querySelectorAll('.player-card h2');
const eyebrows = document.querySelectorAll('.eyebrow');
const turnDots = document.querySelectorAll('.turn-dot');
const scoreBlocks = document.querySelectorAll('.score-block');
const scoreLabels = document.querySelectorAll('.score-label');
const scoreGoals = document.querySelectorAll('.score-goal');
const turnScores = document.querySelectorAll('.turn-score');

// State class names (toggle with classList)
const ACTIVE_CLASS = 'player-card--active';
const WINNER_CLASS = 'player-card--winner';
const ROLLING_CLASS = 'die--rolling';
