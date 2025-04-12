let questions = [];
let correctAnswers = [];

//function to generate question and display it.
function generateQuestion(questionNumber) {
    //generate radnom two numbers for the question
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);

    //create the question and calcualte the answer
    let question = `${num1} + ${num2}`;
    let correctAnswer = num1 + num2;
    return { question, correctAnswer }
}

//generate all questions and display them
for (let i = 1; i <= 4; i++) {
    let { question, correctAnswer } = generateQuestion();
    questions.push(question);
    correctAnswers.push(correctAnswer);
    document.getElementById(`question${i}`).textContent = question;
}

//function to handle user input and display feedback
function handleAnswers() {
    for (let i = 1; i <= 4; i++) {
        let userAnswer = parseInt(prompt(`Question ${i}: ${questions[i - 1]}`))
        document.getElementById(`answer${i}`).textContent = `Your answer: ${userAnswer}`;

        let feedbackElement = document.getElementById(`feedback${i}`);
        if (userAnswer === correctAnswers[i - 1]) {
            feedbackElement.innerHTML = `&checkmark;`;
            feedbackElement.className = "correct";
        } else {
            feedbackElement.innerHTML = `&cross; Correct answer: ${correctAnswers[i - 1]}`;
            feedbackElement.className = "incorrect";
        }
    }
}

handleAnswers();