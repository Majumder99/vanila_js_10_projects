const quizData = [
  {
    question: "How old is surav?",
    a: "10",
    b: "17",
    c: "26",
    d: "110",
    correct: "c",
  },
  {
    question: "How old is bangladesh?",
    a: "100",
    b: "170",
    c: "260",
    d: "1100",
    correct: "d",
  },
  {
    question: "What is php?",
    a: "hypertext preprocessor",
    b: "hypertext processor",
    c: "preprocessor",
    d: "preprocessor hypertext",
    correct: "a",
  },
  {
    question: "What is HTML?",
    a: "Hypertext",
    b: "Programming language",
    c: "Cascading style sheet",
    d: "Hypertext markup language",
    correct: "d",
  },
  {
    question: "Who is the president of USA",
    a: "Putin",
    b: "Joe",
    c: "Biden",
    d: "Obama",
    correct: "c",
  },
  {
    question: "Who is the presdient of russia?",
    a: "Biden",
    b: "Trudo",
    c: "Modi",
    d: "Putin",
    correct: "d",
  },
];
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("submit_btn");
const answerEl = document.getElementsByName("answer");
const quiz = document.getElementById("quiz");
let currentQuestion = 0;
let score = 0;

const deselectAnswer = () => {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
};

const loadQuiz = () => {
  deselectAnswer();
  const currentQuizData = quizData[currentQuestion];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
};
loadQuiz();
btn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score = score + 1;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answer correctly ${score} out of ${quizData.length} quesions</h2> <button onClick="location.reload()">Reload</button>`;
    }
  }

  //   currentQuestion < quizData.length ? getSelected() : alert("Quiz is finished");
  //   getSelected();
});

const getSelected = () => {
  let answer = undefined;
  answerEl.forEach((answerEl) => {
    // console.log(answerEl.checked);
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
};
