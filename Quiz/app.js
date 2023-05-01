const quizData = [
  {
    question: "What is the largest planet in our Solar system?",
    a: "Mars",
    b: "Saturn",
    c: "Jupiter",
    d: "Venus",
    correct: "c",
  },
  {
    question: "What is the tallest mountain in the world?",
    a: "Mount Everest",
    b: "Mount Kilimanjaro",
    c: "Mount Fuji",
    d: "Mount McKinley",
    correct: "a",
  },
  {
    question: "What is the capital of France?",
    a: "Paris",
    b: "London",
    c: "Madrid",
    d: "Rome",
    correct: "a",
  },
  {
    question: "What is the capital of Spain?",
    a: "Paris",
    b: "London",
    c: "Madrid",
    d: "Rome",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score} of ${quizData.length} </h2>
      <button onClick="location.reload()">Reload</button>
      `;
    }
  }
});
