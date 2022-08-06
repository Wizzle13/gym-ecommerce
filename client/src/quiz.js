//start screen user sees on load
const startScreen = document.getElementById("startScreen")
//start button
const btn = document.getElementById("btn");
const subLine = document.getElementById("subLine")
const quizContainer = document.getElementById('quizContainer')
const trainerSelect = document.getElementById('trainerSelect')
//When the game ends, this div presents the time score
// const currentScore = document.getElementById('currentScore')
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
            "No Preference"
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

    if (myQuestions.length === i) {
        endGame()
    } else {
        buildQuiz()
    }
}

function endGame() {
    console.log(answerArray)
    quizContainer.setAttribute('class', 'hidden')
    trainerSelect.removeAttribute('class', 'hidden')
    if (answerArray[1] === 'Strength Training') {
        trainerSelect.innerHTML = `<div class="container"><div class="d-flex justify-content-center">
        <img class="" src="./images/trainer0.jpg" alt="Emerald">
        <p class="ml-2">Your Preferred Trainer is Emerald. An expert in strength training and high impact workouts<p>
        <br>
        </div>
        </div>
        <button class="btn">Go to Plan Selection</button>`
    }else if (answerArray[1] === 'Endurance Training'){
        trainerSelect.innerHTML = `<div class="container"><div class="d-flex justify-content-center">
        <img class="" src="./images/trainer1.jpg" alt="Bill">
        <p class="ml-2">Your Preferred Trainer is Bill. An expert in long distance and endurance training.<p>
        <br>
        </div>
        </div>
        <button class="btn">Go to Plan Selection</button>`
    }else if (answerArray[1] === "Overall Wellness"){
        trainerSelect.innerHTML = `<div class="container"><div class="d-flex justify-content-center">
        <img class="" src="./images/trainer2.jpg" alt="Steven">
        <p class="ml-2">Your Preferred Trainer is Steven. An expert in general health and wellness exercise<p>
        <br>
        
        </div>
        </div>
        <button class="btn">Go to Plan Selection</button>`
    }
}

btn.onclick = function hideStart() {
    startScreen.setAttribute("class", "hidden")
    subLine.setAttribute("class", "hidden")
    quizContainer.removeAttribute('class', 'hidden')

    buildQuiz()
}
