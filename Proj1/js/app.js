'use strict';

var finalCount  = 0



let userName = prompt('Hi, what is your name?')
    alert('Hi ' + userName +'! Welcome to my site! Lets play a guessing game! Good luck have fun!')



let whiteWater = prompt('Have I ever gone White Water Rafting?');
let lowerWater = whiteWater.toLowerCase();

if (lowerWater === 'yes'){
    // console.log(good job!)
        alert('You are correct! I love White Water Rafting!')
        finalCount++;
} else if ( lowerWater === 'no'){
    // console.log(oh no!)
    alert('Wow, I thought you knew me! :(  I love WhiteWater Rafting!')
} else {
    // console.log(wut?)
    alert('Youre funny, but lets move on!')
}

let bigNursing = prompt('Have I ever worked in the medical field?');
let nurse = bigNursing.toLowerCase(); 

if (nurse === 'yes'){
    // console.log(good job!)
    alert('You are correct! Did you know that nurses bring red magic markers into work? Its true, its so they can draw blood!')
    finalCount++;
} else if (nurse === 'no'){
    // console.log(oh no!)
    alert('I did unfortunately, I was a phlebotomist, and they made me go to Art school, so I would learn how to draw blood.')
} else {
    // console.log(wut?)
    alert('You are a riot, but lets move on!')
}

let psychDegree = prompt('Have I completed my degree in Psychology?');
let degree = psychDegree.toLowerCase();

if(degree === 'yes'){
    // console.log(good job!)
    alert('You are correct, I have an Associates in psychology! Do you know the difference between a loan and psychologist? The loan eventually matures and earns money.')
    finalCount++;
} else if( degree === 'no'){
    // console.log(oh no!)
    alert('I do actually have a degree in psychology, I stopped when a paitent told me that no one understood them, and I asked what they meant?')
} else {
    // console.log(wut?)
    alert('Wow, I think you meant something else. Did you know that a Freudian Slip is when you say one thing and mean your mother?')
}

let jogGing = prompt('Have I ever competed in Triatholon?');
let jog = jogGing.toLowerCase();

if(jog === 'yes'){
    // console.log(good job!)
    alert('No, unfortunately I have never ran in a triatholon, whenever I ran behind cars, I would become exhaust-ed.')
} else if(jog === 'no'){
    // console.log(oh no!)
    alert('You are correct, I did however run a half marathons. Do you know who invented running marathons? The Human Race.')
    finalCount++;
} else {
    // console.log(wut?)
    alert('Wow, thats really interesting, but do you know what they call a prank pulled by a coach on his track runner? A running gag.')
}

let cooKing = prompt('Am I an experienced Chef?');
let cook = cooKing.toLowerCase();

if(cook === 'yes'){
    // console.log(good job!)
    alert('You would be wrong, but I do know that a good chef should never bring deviled eggs to church. ')
} else if(cook === 'no'){
    // console.log(oh no!)
    alert('I am not, but I like think that I can cook better than box macaroni. I was gonna tell a joke about cooking, but it just didnt pan out.')
    finalCount++;
} else {
    // console.log(wut?)
    alert('Coolio, but did you know that Harry Potter finds it extremely difficult to differentiate between a cooking utensil and his best friend because they are both cauld-ron.')
}

alert('Switching it up, you will have four guesses to come up with a number I am thinking of, between 1 and 100. Good Luck!')


var counter = 0;
var maxTries = 4;
var randomNumber = Math.floor(Math.random() * 100 + 1);
while (guess !== randomNumber){
    var guess = prompt("Please pick a number between 1 and 100");
    counter ++;
    if ((counter === maxTries) && (randomNumber !== guess)){
        alert('Sorry the number was ' + randomNumber + '!');
        break
    }
    if (guess === randomNumber){
        alert('Congratz, you guessed the correct number!');
        finalCount++;
    } else if (guess > randomNumber){
        alert('Too high, please try again!')
    } else if (guess < randomNumber){
        alert('Too low, please try again!')
    }
}

var favoriteFood = ['sushi', 'poke', 'cookies', 'pie', 'bagels', 'turkey leg', 'apples']
var num = 0;
var corrAns = false;
while(num < 7 && corrAns !== true){
    let guesses = prompt('Please guess a favorite food of mine. Good Luck!')
    let guess = guesses.toLowerCase();
    for(let i = 0; i < favoriteFood.length; i++){
        let food = favoriteFood[i];
        if(guess === food){
            alert('Good job, but how did you know I liked, ' + food + '?')
            corrAns = true;
            finalCount++;
        }
    }
    num++;
    if(corrAns === false){
        alert('oh so close, please try again!')
    }
}


alert('That was fun, ' + userName + '! You got ' + finalCount + ' out of 7 answers correct, good job!')
