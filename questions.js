//global varibles
let questionIndex = 0;
let currentGuess = "";

let countCorrect = 0;
let questionWrong = false;

let highScores = []

const mainContent = document.getElementById("mainContent")
//not sure if I need another const?
const runQuiz = document.getElementById("runQuiz")



const questions = [
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
        choices: ["Return of the Jedi", "Rogue One", "The Last Jedi", "A New Hope"],
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

    const mainContentDiv = document.getElementById("mainContent");
    mainContentDiv.innerHTML = "";

    questionIndex = 0;

    generateQuestion(questionIndex)
}

function generateQuestion(index) {

    const mainContentDiv = document.getElementById("mainContent");

    questionWrong = false;

    //use to generate questions
    const title = document.createElement("h2");
    
    title.setAttribute("class", "text-center");

    console.log(questions[index])
    
    //Pull out title string at index
    title.innerText = questions[index]['title'];

    //Add to document body
    mainContentDiv.append(title);

    const choicesDiv = document.createElement("div");

    choicesDiv.setAttribute("class", "col-md-5 col-md-offset-2");

    mainContentDiv.append(choicesDiv);

    const choiceArray = [];
    questions[index]['choices'].forEach( (choiceString) => {

        const answerInput = document.createElement("input");

        answerInput.setAttribute("type", "button");

        answerInput.setAttribute("class", "btn btn-primary btn-lg text-danger");

        //Which works?
        answerInput.value = choiceString;

        //Which works?
        answerInput.innerText = choiceString;

        answerInput.addEventListener("click", function(){
            checkAnswer(answerInput.value);
        });

        choicesDiv.appendChild(answerInput);

        console.log("Adding one choice to list = ", choiceString);
    });
  
    const resultText = document.createElement("h2");
    resultText.id = "resultTextId";
    resultText.setAttribute("class", "text-center");
    resultText.innerText = "";
    mainContentDiv.append(resultText);    
}


function checkAnswer(guessText) {

    console.log("Checking value = " + guessText)

    //Get our current question
    let selectedQuestion = questions[questionIndex];

    let resultText = document.getElementById("resultTextId");

    if(selectedQuestion.answer === guessText)
    {
        resultText.innerText = "CORRECT!";
        console.log("CORRECT")

        //You don't get a point if you clicked the wrong answer
        if(questionWrong === false)
        {
            countCorrect = countCorrect + 1
        }

        //Increment question index
        questionIndex = questionIndex + 1

        if(questionIndex < questions.length)
        {
            //Blow away the old question's html that was generated
            const mainContentDiv = document.getElementById("mainContent");
            mainContentDiv.innerHTML = "";
            //Generate new question with new index
            generateQuestion(questionIndex)
        }
        else
        {
            ShowFinalScore();
        }
    }
    else
    {
        resultText.innerText = "WRONG!";
        console.log("WRONG")

        questionWrong = true;
    }
}

function ShowFinalScore()
{
    const mainContentDiv = document.getElementById("mainContent");
    mainContentDiv.innerHTML = "";

    const title = document.createElement("h2");
    title.setAttribute("class", "text-center");
    
    //Pull out title string at index
    title.innerText = "Test Finished - Your Score Was " + countCorrect + " out of 5!";

    //Add to document body
    mainContentDiv.append(title);

    const subText = document.createElement("h3");
    subText.setAttribute("class", "text-center");
    subText.innerText = "Scoreboard comming soon!";
    mainContentDiv.append(subText);

}
