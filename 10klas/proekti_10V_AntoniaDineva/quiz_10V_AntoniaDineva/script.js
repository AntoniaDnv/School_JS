let currentIndex = 0;
let score = 0;

// Зареждане при стартиране
window.onload = function () {
  document.getElementById('quizTitle').textContent = quiz.title;
  loadQuizItem();

  document.getElementById('checkBtn').addEventListener('click', checkAnswer);
  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
  document.getElementById('prevBtn').addEventListener('click', prevQuestion);
};

// Зарежда текущия въпрос
function loadQuizItem() {
  const item = quiz.quizItems[currentIndex];
  const container = document.getElementById('quizItem');
  container.innerHTML = `<h3>${item.question}</h3>`;

  item.options.forEach((opt, i) => {
    container.innerHTML += `
      <label class="option">
        <input type="radio" name="option" value="${i}">
        ${opt}
      </label>
    `;
  });

  document.getElementById('quizResult').textContent = "";
}

// Проверява дали избраният отговор е правилен
function checkAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) return alert("Моля, изберете отговор ❗");

  const answer = parseInt(selected.value);
  const correct = quiz.quizItems[currentIndex].correctAnswer;

  if (answer === correct) {
    document.getElementById('quizResult').innerHTML = "<span style='color:green;'>Верен отговор ✔️</span>";
  } else {
    const correctText = quiz.quizItems[currentIndex].options[correct];
    document.getElementById('quizResult').innerHTML = `<span style='color:red;'>Грешен отговор ❌. Верният е: "${correctText}"</span>`;
  }
}

// Следващ въпрос
function nextQuestion() {
  if (currentIndex < quiz.quizItems.length - 1) {
    currentIndex++;
    loadQuizItem();
  } else {
    showFinalScore();
  }
}

// Предишен въпрос
function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuizItem();
  }
}

// Краен резултат
function showFinalScore() {
  document.getElementById('quizItem').innerHTML = '';
  document.getElementById('navigationButtons').style.display = 'none';
  document.getElementById('quizResult').innerHTML = `Край! 🎉 Благодарим, че участвахте.`;
}let correctCount = 0;
let wrongCount = 0;
let timer;
let timeLeft = 90;

document.getElementById("restartBtn").addEventListener("click", restartQuiz);

function startTimer() {
  clearInterval(timer);
  timeLeft = 90;
  document.getElementById("timer").textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      showFinalScore();
    }
  }, 1000);
}

function checkAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) return alert("Моля, изберете отговор ❗");

  const answer = parseInt(selected.value);
  const correct = quiz.quizItems[currentIndex].correctAnswer;

  if (answer === correct) {
    correctCount++;
    document.getElementById('quizResult').innerHTML = "<span style='color:green;'>Верен отговор ✔️</span>";
  } else {
    wrongCount++;
    const correctText = quiz.quizItems[currentIndex].options[correct];
    document.getElementById('quizResult').innerHTML = `<span style='color:red;'>Грешен отговор ❌. Верният е: "${correctText}"</span>`;
  }

  updateStats();
}

function updateStats() {
  const total = correctCount + wrongCount;
  const rate = total ? Math.round((correctCount / total) * 100) : 0;
  document.getElementById('correctCount').textContent = correctCount;
  document.getElementById('wrongCount').textContent = wrongCount;
  document.getElementById('successRate').textContent = rate;
}

function restartQuiz() {
  currentIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  document.getElementById('navigationButtons').style.display = 'block';
  document.getElementById('quizResult').innerHTML = '';
  startTimer();
  updateStats();
  loadQuizItem();
}

window.onload = function () {
  document.getElementById('quizTitle').textContent = quiz.title;
  loadQuizItem();
  startTimer();
  document.getElementById('checkBtn').addEventListener('click', checkAnswer);
  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
  document.getElementById('prevBtn').addEventListener('click', prevQuestion);
};

