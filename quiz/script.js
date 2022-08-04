//start screen user sees on load
const startScreen = document.getElementById("startScreen")
//start button
const btn = document.getElementById("btn");
const subLine = document.getElementById("subLine")
const quizContainer = document.getElementById('quizContainer')
const trainerSelect = document.getElementById('trainerSelect')
//When the game ends, this div presents the time score
const currentScore = document.getElementById('currentScore')
//variable to track question index
var i = 0
var answerArray = []

var myQuestions = [
    {
        question: "How often do you work out per week?:",

        // name: "workoutPerWeek",

        answers: [
            "1-2 times",
            "3-4 times",
            "5 or more times"
        ]
    },
    {
        question: "Select your fitness focus:",

        // name: "fitnessFocus",

        answers: [
            "Endurance Training",
            "Strength Training",
            "Overall Wellness"
        ]
    },
    {
        question: "Select your age:",

        // name: "age",

        answers: [
            "15-30",
            "31-60",
            "61+"
        ]
    },
    {
        question: "What time of day is your ideal workout time?:",

        // name: "workoutTime",

        answers: [
            "Morning (6AM - 11AM)",
            "Afternoon (11AM - 4PM)",
            "Night (4PM - 9PM)"
        ]
    },
    {
        question: "Select your gender:",

        // name: "gender",

        answers: [
            "Female",
            "Male",
            "Other"
        ]
    },
]

//Display quiz from array when user presses start
function buildQuiz() {
    quizContainer.innerHTML = `<h3>${myQuestions[i].question}</h3>
              
    <div class="mb-3"><button class="btn-block btn-primary" id="answerA" >${myQuestions[i].answers[0]}</button></div>
  
    <div class="mb-3"><button class="btn-block btn-primary" id="answerB">${myQuestions[i].answers[1]}</button></div>
              
    <div class="mb-3"><button class="btn-block btn-primary" id="answerC">${myQuestions[i].answers[2]}</button></div>`

    //variables that contain id's for each button on the screen
    var answerA = document.getElementById('answerA')
    var answerB = document.getElementById('answerB')
    var answerC = document.getElementById('answerC')

    //each button is its own submit, and only the correct submit "id" will allow the user to increment index
    answerA.addEventListener('click', answerCheck)
    answerB.addEventListener('click', answerCheck)
    answerC.addEventListener('click', answerCheck)
}

function answerCheck() {
    answerArray.push(this.innerText)
    

    i++

    if (myQuestions.length == i) {
        endGame()
    } else {
        buildQuiz()
    }

    // if (this.innerText === myQuestions[i].correctAnswer) {
    //     //if answer is correct
    //     console.log('correct!')
    //     //increment the index
    //     i++
    //     console.log(`index is ${i}`)
    //     console.log(`myQuestions length is ${myQuestions.length}`)
    //     //if the quiz is over
    //     if (myQuestions.length == i) {
    //         //end the quiz
    //         endGame()
    //     } else {
    //         //rebuild the quiz question
    //         buildQuiz()
    //     }
    // } else {
    //     console.log('false!')
    //     //deduct time
    //     time = time - 15

    //     highlight()
    // }
}

function endGame() {
    console.log(answerArray)
    quizContainer.setAttribute('class', 'hidden')
    trainerSelect.removeAttribute('class', 'hidden')
}

// function highScore() {
//     //hide quiz
//     quizContainer.setAttribute('class', 'hidden')
//     //reveal end of game screen
//     scoreSaver.removeAttribute('class', 'hidden')
//     //add HTML to id=currentScore to display time score
//     currentScore.innerHTML = `Your score is ${time}`
// }

// function displayScores() {
//   savedScores.textContent = displayedScoreArray
// }

// function printHighscores() {
//     //pull from local
//     var highScoresParse = JSON.parse(localStorage.getItem('highScores') || [])
//     console.log("hs", JSON.stringify(highScoresParse))
//     // var highScoresString = JSON.stringify(highScoresParse)

//     for (let i = 0; i < highScoresParse.length; i++) {
//         savedScores.innerHTML += `<p> ${highScoresParse[i].initials} scored ${highScoresParse[i].score} points </p>`;
//     }
// }

// var initials = document.getElementById('initials')
// var scoreArray = JSON.parse(window.localStorage.getItem("highScores")) || [];

// initialsBtn.onclick = function scoreSave() {

//     //compile user input and remaining time into one var
//     var newScore = {
//         'initials': initials.value,
//         'score': time
//     }

//     //push to array
//     scoreArray.push(newScore)

//     //push array to local (see printHighScores() for pull)
//     localStorage.setItem('highScores', JSON.stringify(scoreArray))

//     //reload page on submit
//     location.reload()

// }

// savedScores.textContent = JSON.parse(localStorage.getItem('highScores'))

//when user clicks start, the timer starts and quiz is built
btn.onclick = function hideStart() {
    startScreen.setAttribute("class", "hidden")
    subLine.setAttribute("class", "hidden")
    quizContainer.removeAttribute('class', 'hidden')

    buildQuiz()
}
