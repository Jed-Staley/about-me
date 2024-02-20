'use strict';

let userName = prompt('Hi! What\'s your name?');
userName[0].toUpperCase;
alert('Hi ' + userName + '! Welcome to the site!');

const button = document.querySelector('#quizButton');
button.onclick = function() {quiz();};

function quiz() {
  let score = 0;

  function qAndA(question, answer, wrongAnswer, explanation) {
    let response = prompt(question);
    if (response[0].toLowerCase === answer) {
      score++;
      alert('That\'s correct! ' + explanation);
    } else if (response[0].toLowerCase === wrongAnswer) {
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
  alert('That was the last question ' + userName + '! You got ' + score + ' out of 5 questions right.');
}
