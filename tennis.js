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
}

document.getElementById("increaseP1Point").addEventListener('click', function() {
    playerOneScore += 15;
    if (playerOneScore === 40) {
        return;
    }
});

document.getElementById("increaseP2Point").addEventListener('click', function() {
    playerTwoScore += 15;
    if (playerTwoScore === 40) {
        return;
    }
});

document.getElementById('deuce').addEventListener('click', function() {
    playerOneScore = 40;
    playerTwoScore = 40;
});

document.getElementById('resetScore').addEventListener('click', function() {
    playerOneScore = 0;
    playerTwoScore = 0;
})