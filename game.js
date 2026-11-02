"use strict";

// ---------------------------------------------------------------
// Game rules and state
// ---------------------------------------------------------------
const WINNING_SCORE = 100; // as per game rules
const MAX_ROLLS_PER_ROUND = 3; // as per game rules: roll this many times, then hold
const SWITCH_DELAY_MS = 1000; // how long the rolled 1 stays visible

const scores = [0, 0]; // stored total score per player (index 0 = player 1)
let currentScore = 0;
let rollsThisRound = 0; // rolls used by the active player this round
let activePlayer = 0;
let switchTimeout; // pending auto-switch after a rolled 1

// Per-player elements, in player order (index 0 = player 1)
const totalEls = [player0Total, player1Total];
const currentEls = [player0CurrentScore, player1CurrentScore];
const statusEls = [player0Status, player1Status];
// playerCards (all .player-card elements, in player order) comes from selectors.js

// ---------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------
const showTotal = (player, value) => (totalEls[player].textContent = value);
const showCurrent = (player, value) => (currentEls[player].textContent = value);
const showStatus = (message) => (gameStatus.textContent = message);
const resetDie = () => (die.src = DIE_PLACEHOLDER_SRC);

const setButtonsDisabled = (rollDisabled, holdDisabled = rollDisabled) => {
  rollButton.disabled = rollDisabled;
  holdButton.disabled = holdDisabled;
};

// Highlight the active player's card and update every player's label
const renderActivePlayer = () => {
  statusEls.forEach((status, i) => {
    const isActive = i === activePlayer;
    status.textContent = isActive ? "Your turn" : "Waiting";
    playerCards[i].classList.toggle(ACTIVE_CLASS, isActive);
    playerCards[i].setAttribute("aria-current", isActive);
  });
  showStatus(`Player ${activePlayer + 1}, roll the die`);
};

// ---------------------------------------------------------------
// Game flow
// ---------------------------------------------------------------

// Pass the turn: the round score is lost, the stored total stays as it was
const switchPlayer = function () {
  currentScore = 0;
  rollsThisRound = 0;
  showCurrent(activePlayer, 0);
  showTotal(activePlayer, scores[activePlayer]); // drop the live preview
  activePlayer = (activePlayer + 1) % scores.length;

  renderActivePlayer();
  resetDie();
  setButtonsDisabled(false, true); // hold unlocks after the last roll
};

const endGame = function () {
  playerCards[activePlayer].classList.add(WINNER_CLASS);
  statusEls[activePlayer].textContent = "Winner";
  showStatus(`Player ${activePlayer + 1} wins!`);
  resetDie();
  setButtonsDisabled(true);
  rollResult.textContent = `Click on 'New game' to play again!`;
};
// Start (or restart) a game: player 1 begins
const resetGame = function () {
  // Cancel a pending auto-switch so it can't fire after the reset
  clearTimeout(switchTimeout);

  scores.fill(0);
  currentScore = 0;
  rollsThisRound = 0;
  activePlayer = 0;

  scores.forEach((_, i) => {
    showTotal(i, 0);
    showCurrent(i, 0);
    playerCards[i].classList.remove(WINNER_CLASS);
  });

  renderActivePlayer();
  resetDie();
  setButtonsDisabled(false, true); // hold unlocks after the last roll
};

// ---------------------------------------------------------------
// Events
// ---------------------------------------------------------------
rollButton.addEventListener("click", function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  rollsThisRound++;
  die.src = `images/dice-${diceNumber}.svg`;

  if (diceNumber !== 1) {
    currentScore += diceNumber;
    showCurrent(activePlayer, currentScore);
    // Show the total live: stored total + points of the current round
    showTotal(activePlayer, scores[activePlayer] + currentScore);

    // Limit rolls per round: after the last one the player must hold
    if (rollsThisRound === MAX_ROLLS_PER_ROUND) {
      setButtonsDisabled(true, false); // roll locked, hold unlocked
      showStatus(`Player ${activePlayer + 1}, no rolls left. Hold your score`);
    }
  } else {
    // Rolled a 1: show it to the losing player, then switch automatically
    showStatus(`Player ${activePlayer + 1} rolled a 1!`);
    setButtonsDisabled(true);
    switchTimeout = setTimeout(switchPlayer, SWITCH_DELAY_MS);
  }
});

holdButton.addEventListener("click", function () {
  scores[activePlayer] += currentScore;
  showTotal(activePlayer, scores[activePlayer]);

  if (scores[activePlayer] >= WINNING_SCORE) endGame();
  else switchPlayer();
});

newGameButton.addEventListener("click", resetGame);

resetGame(); // initial setup: "?" die, player 1 active, hold locked
