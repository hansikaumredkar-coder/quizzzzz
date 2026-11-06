
const questions = [
  {
    question: "What is Hansika's favourite kind of day?",
    options: ["A rainy cosy day", "A shopping day", "A party night", "A lazy movie day"],
    answer: 0
  },
  {
    question: "What does Hansika love receiving the most?",
    options: ["Flowers", "Expensive gadgets", "Chocolates", "Books"],
    answer: 0
  },
  {
    question: "Which aesthetic does Hansika love?",
    options: ["Dark and edgy", "Soft and dreamy", "Neon and bold", "Minimal black and white"],
    answer: 1
  },
  {
    question: "What is Hansika's favourite flower?",
    options: ["Rose", "Sunflower", "Lily", "Tulip"],
    answer: 2
  },
  {
    question: "What nickname does Shriraj use for Hansika?",
    options: ["Shona", "Balu", "Cutie", "All of these"],
    answer: 3
  },
  {
    question: "What are you two celebrating with this quiz?",
    options: ["First date", "4th monthsary", "One year together", "Birthday"],
    answer: 1
  },
  {
    question: "What makes Hansika happiest in a relationship?",
    options: ["Thoughtful little gestures", "Expensive gifts", "Showing off", "Winning arguments"],
    answer: 0
  },
  {
    question: "What is one thing that always makes Hansika smile?",
    options: ["Shriraj's messages", "Cute surprises", "Funny moments together", "All of these"],
    answer: 3
  },
  {
    question: "What's better than a perfect date?",
    options: ["A perfect selfie", "A meaningful memory together", "A shopping spree", "A fancy restaurant"],
    answer: 1
  },
  {
    question: "What's the most important thing in your relationship?",
    options: ["Trust and understanding", "Matching outfits", "Gifts", "Social media posts"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];

  document.getElementById("question-number").textContent =
    `QUESTION ${currentQuestion + 1} OF ${questions.length}`;

  document.getElementById("progress-bar").style.width =
    `${(currentQuestion / questions.length) * 100}%`;

  document.getElementById("question").textContent = q.question;
  document.getElementById("feedback").textContent = "";
  document.getElementById("next-button").classList.add("hidden");

  const answers = document.getElementById("answers");
  answers.innerHTML = "";

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    answers.appendChild(button);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  const buttons = document.querySelectorAll(".answer");

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === correct) {
      button.textContent += " ✓";
    }
  });

  if (selected === correct) {
    score++;
    document.getElementById("feedback").textContent =
      "Awww! You got it right! 💗";
  } else {
    document.getElementById("feedback").textContent =
      "Oops! Time to know her a little better! 🌸";
  }

  document.getElementById("next-button").classList.remove("hidden");
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");
  document.getElementById("progress-bar").style.width = "100%";

  document.getElementById("final-score").textContent =
    `You scored ${score} out of ${questions.length}!`;

  let message;

  if (score === 10) {
    message = "PERFECT SCORE! You know her so well! 🥹💕";
  } else if (score >= 7) {
    message = "Awww, you know her pretty well! Keep collecting memories! 💗";
  } else if (score >= 4) {
    message = "Not bad! There's still more to discover about each other! 🌷";
  } else {
    message = "Looks like you need a few more Hansika lessons! 😂💞";
  }

  document.getElementById("final-message").textContent = message;
}

function restartQuiz() {
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("start-screen").classList.remove("hidden");
}

const heartContainer = document.getElementById("hearts");

for (let i = 0; i < 18; i++) {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = "♡";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDelay = `${Math.random() * 8}s`;
  heart.style.animationDuration = `${6 + Math.random() * 6}s`;
  heartContainer.appendChild(heart);
}
