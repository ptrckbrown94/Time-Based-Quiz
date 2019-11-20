//global varibles
let questionIndex = 0;
const mainContent = document.getElementById("mainContent")
//not sure if I need another const?
const runQuiz = document.getElementById("runQuiz")



let questions = [
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
    },

    {
        title: "Worst Character in the Star Wars movie Universe:",
        choices: ["Young Anakin Skywalker", "Jar Jar Binks", "Watto", "Salacious B. Crumb"],
        answer: "Jar Jar Binks"
    }];




const startButton = document.getElementById("start-button")
startButton.addEventListener("click", startQuiz)

function startQuiz() {

    //https://dzone.com/articles/removing-element-plain, used to delete my text
    const elem = document.getElementById("mainContent");
    elem.parentNode.removeChild(elem);


    questionIndex = 0;

    generateQuestion()
}

function generateQuestion() {
    //use to generate questions
    const title = document.createElement("p");
    console.log(questions[0])
    title.innerText = "Which is the best Star Wars video Game:"
    document.body.append(title);
    const choices = document.createElement("p");
    questions.forEach(function () {

    });
    const answer = document.createElement("p");
    // and give it some content 



}


// trying to call the questions
function addElement() {
    const runQuiz = document.createElement(runQuiz);

    console.log("test")
}



function LoadQuestion(index) {

    let question = questions[index];

    let title = question.title;

    console.log("The question title is: " + title);

    let h2TextElement = document.getElementById("questionText");

    h2TextElement.nodeValue = title;

}


//bootstrap cards
// {/* <div class="card">
// <div class="card-body">
// This is some text within a card body.
// </div>
// </div> */}