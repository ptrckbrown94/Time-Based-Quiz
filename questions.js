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


// when I navigate to a new page with 
//    window.location.href = "questionPage.html";
// or
//    location.assign("questionPage.html"); 
// The js file seems to always "reload" so the myFunctionWasCalled is false on the new page.
// If I call doFoo() on the new page, if it was called before I would expect the value to then be true!
// So, if the variable always resets, how will I keep track of high scores?

var myFunctionWasCalled = false;



function StartQuiz() {
    console.log("test");
    // https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
    
    //window.location.href = "questionPage.html";
    location.assign("questionPage.html");

    questionIndex = 0;


    LoadQuestion(questionIndex)


}

function ClickA() {

}

function ClickB() {

}

function ClickC() {

}

function ClickD() {

}

function LoadQuestion(index) {

    let question = questions[index];

    let title = question.title;

    console.log("The question title is: " + title)

    let h2TextElement = document.getElementById("questionText");

    h2TextElement.nodeValue = title;

}