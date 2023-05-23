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
    if (playerOneScore === 0) {
        playerOneScore = 15;
    } else if (playerOneScore === 15) {
        playerOneScore = 30;
    } else if (playerOneScore === 30) {
        playerOneScore = 40;
    } else if (playerOneScore === 40) {
        playerOneScore = 'AD';
    }
    updateScores();
});

document.getElementById("increaseP2Point").addEventListener('click', function() {
    if (playerTwoScore === 0) {
        playerTwoScore = 15;
    } else if (playerTwoScore === 15) {
        playerTwoScore = 30;
    } else if (playerTwoScore === 30) {
        playerTwoScore = 40;
    } else if (playerTwoScore === 40) {
        playerTwoScore = 'AD';
    }
    updateScores();
});

// Increase player games that have been won
document.getElementById("addp1Game").addEventListener('click', function() {
    if (playerOneGameScore === 7) {
        return;
    }
    playerOneGameScore++;
    updateGames();
});

document.getElementById("addp2Game").addEventListener('click', function() {
    if (playerTwoGameScore === 7) {
        return;
    }
    playerTwoGameScore++;
    updateGames();
});

// Increase player sets that have been won
document.getElementById("addp1Set").addEventListener('click', function() {
    if (playerOneSetScore === 3) {
        return;
    }
    playerOneSetScore++;
    updateSets();
});

document.getElementById("addP2Set").addEventListener('click', function() {
    if (playerTwoSetScore === 3) {
        return;
    }
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

