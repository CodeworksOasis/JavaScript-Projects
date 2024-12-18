const questions = [
  {
    topic: "Science",
    question: "What color is the sky?",
    possibleAnswers: ["blue", "green", "yellow"],
    correctAnswer: "blue",
  },
  {
    topic: "Tech",
    question: "What is the best language to learn?",
    possibleAnswers: ["javascript", "python", "ruby"],
    correctAnswer: "javascript",
  },
  {
    topic: "Gobal",
    question: "What is the largest country in the world?",
    possibleAnswers: ["USA", "Mexico", "Russia"],
    correctAnswer: "Russia",
  },
  {
    topic: "Sci-fi",
    question: "Who is Luke Skywalker's father?",
    possibleAnswers: ["Darth Vader", "Han Solo", "Chewy"],
    correctAnswer: "Darth Vader",
  },
];

const quizProgress = document.getElementById("quizProgress");
const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");
let currentQuestionsIndex = 0;

function handleQuestion(index) {
  quizProgress.innerHTML = "";
  questions.forEach((question) => {
    quizProgress.innerHTML += "<span></span>";
  });

  let spans = document.querySelectorAll("span");
  for (let i = 0; i <= index; i++) {
    spans[i].classList.add("seen");
  }

  answerContainer.innerHTML = "";

  questionContainer.innerHTML = `<p>${questions[index].topic}</p>
  <p>${questions[index].question}</p>`;

  questions[index].possibleAnswers.forEach((answer) => {
    answerContainer.innerHTML += `<button>${answer}</button>`;
  });

  let answers = document.querySelectorAll("button");

  answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
      if (e.target.textContent === questions[index].correctAnswer) {
        currentQuestionsIndex = (currentQuestionsIndex + 1) % questions.length;
      } else {
        console.log("Wrong");
      }
      if (currentQuestionsIndex == 1) {
        console.log("timeout")
      }
      handleQuestion(currentQuestionsIndex);
    });
  });
}

handleQuestion(currentQuestionsIndex);
