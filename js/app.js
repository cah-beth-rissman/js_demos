'use strict';
console.log('hello from the js file!');

function getUserName(){
  let userName = prompt('What is your party name?');
  console.log('user name data type:', typeof(userName));
  return document.write(userName);
}

function guessANumber(){
  let answer;
  while(answer <== '8'){
    answer = prompt('How many people are in your party?');
    if(answer !== '7'){
      alert('Reservations are for parties of 8 or less only.');
    } else {
      alert('Proceed to enter your reservation time request.');
    }
  }
}

function getUserTime(){
  let message;
  let time = prompt('What time is your reservation request?');
  if(time <= 11){
    message = 'Your brunch reservation is confirmed';
  }else if(time >= 12 && time <= 18){
    message = 'Your lunch reservation is confirmed';
  } else if(time > 18 && time < 24) {
    message = 'Your dinner reservation is confirmed';
  } else {
    message = 'Please enter a valid time between 7 and 21';
  }
  return message;
}


// function displayRating() {
//   let output = '';
//   let rating = prompt('scale of 1-5, how many stars?');
//   //for loop
//   for(let i = 0; i < rating; i++){
//     output += '<img  src=\'images/CRAIG-B.png\'  />';
//   }
//   return document.write(output);
// }



// guessANumber();
// getUserName();
// getUserTime();
// displayRating();
