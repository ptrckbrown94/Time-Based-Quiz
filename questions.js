//global varibles
let questionIndex = 0;

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    }];



var myFunctionWasCalled = false;



function StartQuiz() {
    console.log("test");



    questionIndex = 0;


    LoadQuestion(questionIndex)


}


}

function LoadQuestion(index) {

    let question = questions[index];

    let title = question.title;

    console.log("The question title is: " + title)

    let h2TextElement = document.getElementById("questionText");

    h2TextElement.nodeValue = title;

}