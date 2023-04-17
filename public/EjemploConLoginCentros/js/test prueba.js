const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const loginButton = document.getElementById('login-button');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const questions = [
  {
    question: "¿Pregunta 1?",
    answer: true
  },
  {
    question: "¿Pregunta 2?",
    answer: false
  },
  {
    question: "¿Pregunta 3?",
    answer: true
  },
  {
    question: "¿Pregunta 4?",
    answer: false
  },
  {
    question: "¿Pregunta 5?",
    answer: true
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const question = questions[currentQuestion];
    questionContainer.innerHTML = 
        <h2>${question.question}</h2> 
}