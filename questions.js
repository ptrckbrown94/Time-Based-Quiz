//global varibles
let questionIndex = 0;

var questions = [
    {
        title: "Which is the best Star Wars video Game:",
        choices: ["Star Wars: Shadows of the Empire", "Super Empire Strikes Back", "Lego Star Wars the complete Saga", "Star Wars: Knights of the Old Replic"],
        answer: "Star Wars: Shadows of the Empire"
    },
    {
        title: "Which character had the saddiest death:",
        choices: ["Han Solo", "Random Ewok", "Mace Windo", "Jabba the Hutt"],
        answer: "Han Solo"
    },
    {
        title: "Which is the highest grossing Star Wars movie:",
        choices: ["Return of the Jedi", "Rogue One", "The Last Jedi", " A New Hope"],
        answer: "A New Hope"
    },
    {
        title: "Who is the most power full Jedi:",
        choices: ["Kit Fisto", "Yoda", "Luke Skywalker", "Qui-Gon Jinn"],
        answer: "Luke Skywalker"
    }

    {
        title: "Worst Character in the Star Wars movie Universe:",
        choices: ["Young Anakin Skywalker", "Jar Jar Binks", "Watto", "Salacious B. Crumb"],
        answer: "Jar Jar Binks"
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