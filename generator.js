// as a user, ask me how many cards I want to create, programmersWithPrompt.js
// as a user I want to detail questions to front of cards
// as a user, I should detail an answer to back of card
// as a user, ask me if I want to create additional cards, y or n
// as a user, ask the user if they want to play, y or no
// ask the user first question, followed by answer
// ask user, if user wants to continue

// npm package
var inquirer = require("inquirer");
var BasicCard = require("./basicCard.js");

// BasicCard.js will be called up

// constructor function used to create flashcard objects
function Flashcards(questionF1, questionB1, questionC1, questionN1) {
  this.questionF1 = questionF1;
  this.questionB1 = questionB1;
  this.questionC1 = questionC1;
  this.questionN1 = questionN1;
};

// create printInfo method and apply to all programmer objects
Flashcards.prototype.printInfo = function() {
  console.log("Front of Card: " + this.questionF1 + "\nBack of Card: " + this.questionC1 + "\nContinue: ");
};

//runs inquirer and asks the user a series of questions whose replies are
//stored within the variable answers inside of the start variable
var start = function() {
inquirer.prompt([{
    name: "questionF1",
    message: "What question do you want to detail on the front of the card?"
}, {
    name: "questionB1",
    message: "What answer would you prefer to detail on the back of the card?"
}, {
    name: "questionC1",
    type: "list",
    message: "Would you like to continue creating additional flashcards?",
    choices: ["Y", "N"]
}]).then(function (yesOrNo) {
      if(yesOrNo.questionC1 === 'y') {
        inquirer.prompt([{
          name: "questionN1",
          message: "Input the number of additional cards you would like to create!"
          }]).then(function (cardNumber) {
            if(cardNumber < 0 || cardNumber > 9) {
              console.log("Please enter a valid number between 0-9.");
            } else {
              for(var i = 0; i < cardNumber.length; i++) {

              }
            }
          })
      }
      else {
        console.log("Then, you're finished!");
      }

});


}; // end of var start function

// ]).then(function(answers) { // end of inquirer prompt
//   // based on user answer, either
//   var answer = new Flashcards(answers.questionF1, answers.questionB1, answers.questionC1, answers.questionF1)
// });

start();
