'use strict';

let userName = prompt('Hi! What\'s your name?');
alert('Hi ' + userName + '! Welcome to the site!');

const button = document.querySelector('#quizButton');
button.onclick = function() {quiz();};

function quiz() {
  let score = 0;

  function qAndA(question, answer, wrongAnswer, explanation) {
    let response = prompt(question);

    if (response[0].toLowerCase() === answer) {
      score++;
      alert('That\'s correct! ' + explanation);
    } else if (response[0].toLowerCase() === wrongAnswer) {
      alert('Sorry, that\'s not correct. You\'ll remember that ' + explanation);
    } else {
      alert('Sorry, I couldn\'t understand what you said. We\'ll continue on, but just know that ' + explanation);
    }
  }

  qAndA('Was Jed born in Montana?', 'n', 'y', 'Jed was born in was Missouri, not Montana.');
  qAndA('Does Jed have 5 nieces and nephews?', 'y', 'n', 'Jed has 5 nieces and nephews.');
  qAndA('Did Jed attend Columbia Valley Community College?', 'n', 'y', 'Jed was born in Columbia, Missouri but attended Catawba Valley Community College');
  qAndA('Did Jed work for Amazon Inc. in order to work days?', 'n', 'y', 'Jed left Amazon Inc. in order to work days, not joined!');
  qAndA('Following his employment at Amazon Inc., did Jed work for SAS Retail Services?', 'y', 'n', 'Jed did indeed work for SAS Retail Services following his employment at Amazon Inc.');

  let guessFailed = true;
  for (let i = 1; i <= 4; i++) {
    let guess = prompt('How many questions so far do you think you\'ve gotten right?');
    // This is user error correction so that if the user enters the number written out or says "none", it will set the value of the guess appropriately.
    if (guess.length > 1) {
      let writtenGuesses = ['zero','one','two','three','four','five','six'];
      if (writtenGuesses.indexOf(guess.toLowerCase()) !== -1) {
        guess = writtenGuesses.indexOf(guess.toLowerCase());
      } else if (guess.toLowerCase()[0] === 'n') {
        guess = 0;
      }
    }
    guess = Number(guess);
    if (guess === score) {
      alert(`Wow ${userName}, you guessed right!`);
      guessFailed = false;
      break;
    } else if (guess > score) {
      alert('Too high! Maybe try to guess again?');
    } else if (guess < score) {
      alert('Too low! Maybe try to guess again?');
    } else {
      alert('Sorry, I didn\'t understand what you said. Can you reword your answer?');
      i--;
    }
  }
  if (guessFailed) {
    alert('Nevermind! You ran out of guesses. The correct answer was ' + score + '.');
  } else {
    score++;
  }

  for (let i = 6; i >= 1; i--) {
    let guess = prompt('Name one of Jed\'s top ten favorite Bible verses. Make sure to enter your answer properly! You have ' + i + ' remaining guesses.');
    let answers = ['romans 4:3','romans 8:28','colossians 4:5','matthew 22:29','romans 3:23','romans 8:10','romans 9:3','psalms 58:10','jeremiah 17:10','2nd peter 1:20'];
    if (answers.indexOf(guess.toLowerCase()) !== -1) {
      alert('That\'s right!! You really know Jed well.');
      score++;
      break;
    } else if (i === 1) {
      alert('Sorry! That was your sixth guess, you\'re out of guesses. The correct answers were: Romans 4:3, Romans 8:28, Colossians 4:5, Matthew 22:29, Romans 3:23, Romans 8:10, Romans 9:3, Psalms 58:10, Jeremiah 17:10, and 2nd Peter 1:20.');
    } else {
      alert('Nope! Guess again.');
    }
  }
  alert (`Congrats ${userName}, you've reached the end of the quiz with a score of ${score} out of 7.`);
}
