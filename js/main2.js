window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
  easy: 6,
  medium: 4,
  hard: 2
};

let currentLevel;
// To change level
if (localStorage.getItem("choice") == levels.easy) {
  currentLevel = levels.easy;
}
if (localStorage.getItem("choice") == levels.medium) {
  currentLevel = levels.medium;
}
if (localStorage.getItem("choice") == levels.hard) {
  currentLevel = levels.hard;
}




let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');


const words = [
  'abstraction',
  'javascript',
  'developer',
  'echo',
  'software',
  'algorithm',
  'agile',
  'angular',
  'argument',
  'operators',
  'asynchronous',
  'augmented',
  'binary',
  'bootstrap',
  'command',
  'interface',
  'cookies',
  'database',
  'compiler',
  'interpreter',
  'statement',
  'constants',
  'cybersecurity',
  'debugging',
  'declaration',
  'exception',
  'framework',
  'github',
  'inheritance',
  'iteration',
  'linux',
  'markup',
  'mysql',
  'operating',
  'package',
  'packet',
  'parameter',
  'pattern',
  'runtime',
  'scripting',
  'server',
  'terminal',
  'version',
  'website',
  'whiteboarding'
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}


// Highscore based on score value for Session Storage
if (typeof sessionStorage['highscore'] === 'undefined' || score > sessionStorage['highscore']) {

  sessionStorage['highscore'] = score;
  // alert(document.cookie);
} else {
  sessionStorage['highscore'] = sessionStorage['highscore'];
  document.cookie = "highscore=" + score;

}
// Prevent display of High Score: -1
if (sessionStorage['highscore'] >= 0) {
  highscoreDisplay.innerHTML = sessionStorage['highscore'];
}


// Start match
function startMatch() {
  var highcookie = document.cookie;

  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // Highscore based on score value for Session Storage
  if (typeof sessionStorage['highscore'] === 'undefined' || score > sessionStorage['highscore']) {

    sessionStorage['highscore'] = score;
    // alert(document.cookie);
  } else {
    sessionStorage['highscore'] = sessionStorage['highscore'];
    document.cookie = "highscore=" + score;

  }

  // Prevent display of High Score: -1
  if (sessionStorage['highscore'] >= 0) {
    highscoreDisplay.innerHTML = sessionStorage['highscore'];
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}

function endtest() {
  let text;
  if (confirm("Do you want to Quit ?") == true) {
    window.location.href = "index.html";
    } else {
    txt = "You canceled!";
  }
  
}