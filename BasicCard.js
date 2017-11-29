var inquirer = require("inquirer");

var questionSubstance = require("./questions.json");

var myQuestions = [];

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

// Uses the object constructor to create questions with the info from json file
var test = new BasicCard(questionSubstance[1].front, questionSubstance[1].back)
console.log(test)
for (i = 0; i < questionSubstance.length; i++) {
    var newQuestion = new BasicCard(questionSubstance[i].front, questionSubstance[i].back)
    myQuestions.push(newQuestion);
}


function doThings(i) {

    if (i < myQuestions.length) {
        doThings(i + 1);
        inquirer
        .prompt([
            {
                type: "input",
                message: myQuestions[i].front,
                name: "answer"
            }
        ])
        .then(function(userResponse) { 
            if (userResponse.answer = myQuestions[i].back) {
                console.log("Correct! Really impressive bud.")
    
            }
            else {
                console.log("Wrong! Try google.")
            }
        });
        
    } else {
        console.log('donezo');
    }
}
doThings(0);
