let playerOneScore = 0;
let playerTwoScore = 0;

let playerOneGameScore = 0;
let playerTwoGameScore = 0;

let playerOneSetScore = 0;
let playerTwoSetScore = 0;

// Get the score elements
const playerOnePointCount = document.getElementById("playeronepoint");
const playerTwoPointCount = document.getElementById("playertwopoint");

// Get the game elements
const playerOneGameCount = document.getElementById("playeronegames");
const playerTwoGameCount = document.getElementById("playertwogames");

// Get the set score elements
const playerOneSetCount = document.getElementById("playeronesets");
const playerTwoSetCount = document.getElementById("playertwosets");



// Function to update the scores
function updateScores() {
    playerOnePointCount.textContent = playerOneScore;
    playerTwoPointCount.textContent = playerTwoScore;
};

// Function to update the game counts
function updateGames() {
    playerOneGameCount.textContent = playerOneGameScore;
    playerTwoGameCount.textContent = playerTwoGameScore;
};

// Function to update the set counts
function updateSets() {
    playerOneSetCount.textContent = playerOneSetScore;
    playerTwoSetCount.textContent = playerTwoSetScore;
};

// Increase Player Points
document.getElementById("increaseP1Point").addEventListener('click', function() {
    playerOneScore += 15;
    updateScores();
});

document.getElementById("increaseP2Point").addEventListener('click', function() {
    playerTwoScore += 15;
    updateScores();
});

// Increase player games that have been won
document.getElementById("addp1Game").addEventListener('click', function() {
    playerOneGameScore++;
    updateGames();
});

document.getElementById("addp2Game").addEventListener('click', function() {
    playerTwoGameScore++;
    updateGames();
});

// Increase player sets that have been won
document.getElementById("addp1Set").addEventListener('click', function() {
    playerOneSetScore++;
    updateSets();
});

document.getElementById("addP2Set").addEventListener('click', function() {
    playerTwoSetScore++;
    updateSets();
});

// If both players are on 40-40
document.getElementById('deuce').addEventListener('click', function() {
    playerOneScore = 40;
    playerTwoScore = 40;
    updateScores();
});

// Reset player scores for next game
document.getElementById('resetscore').addEventListener('click', function() {
    playerOneScore = 0;
    playerTwoScore = 0;
    updateScores();
});

document.getElementById('resetgame').addEventListener('click', function() {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneGameScore = 0;
    playerTwoGameScore = 0;
    updateScores();
    updateGames();
});

document.getElementById('reset').addEventListener('click', function() {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneGameScore = 0;
    playerTwoGameScore = 0;
    playerOneSetScore = 0;
    playerTwoSetScore = 0;
    updateScores();
    updateGames();
    updateSets();
});

