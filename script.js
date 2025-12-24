const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');

const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list');

const categorySelect = document.getElementById("categorySelect");
const countSelect = document.getElementById("countSelect");

// feedback DOM
const feedbackBox = document.getElementById("feedback");
const feedbackStatus = document.getElementById("feedbackStatus");
const feedbackCorrect = document.getElementById("feedbackCorrect");
const feedbackExplain = document.getElementById("feedbackExplain");
const feedbackExplainText = document.getElementById("feedbackExplainText");

// -----------------
// Etat
// -----------------
let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

// pool utilisé (filtré / mélangé)
let quizPool = [];

// -----------------
// Utils
// -----------------
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function uniqueCategories(allQs) {
  return Array.from(new Set(allQs.map(q => q.category).filter(Boolean))).sort();
}

// -----------------
// Init catégories
// -----------------
function initCategoryFilter() {
  if (!categorySelect) return;

  const cats = uniqueCategories(questions);
  // reset
  categorySelect.innerHTML = `<option value="ALL">Toutes</option>`;
  cats.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categorySelect.appendChild(opt);
  });
}

initCategoryFilter();

// -----------------
// Construction du quiz (filtre catégorie + nombre)
// -----------------
function buildQuizPool() {
  const selectedCat = categorySelect ? categorySelect.value : "ALL";
  const wantedCount = countSelect ? parseInt(countSelect.value, 10) : 20;

  let pool = [...questions];

  if (selectedCat !== "ALL") {
    pool = pool.filter(q => q.category === selectedCat);
  }

  pool = shuffleArray(pool);

  if (wantedCount !== 9999) {
    pool = pool.slice(0, Math.min(wantedCount, pool.length));
  }

  return pool;
}

// -----------------
// UI Start / Popup
// -----------------
startBtn.onclick = () => {
  popupInfo.classList.add('active');
  main.classList.add('active');
};

exitBtn.onclick = () => {
  popupInfo.classList.remove('active');
  main.classList.remove('active');
};

// Lancement du quiz
continueBtn.onclick = () => {
  quizPool = buildQuizPool();

  // reset état
  questionCount = 0;
  questionNumb = 1;
  userScore = 0;

  quizSection.classList.add('active');
  popupInfo.classList.remove('active');
  main.classList.remove('active');
  quizBox.classList.add('active');
  resultBox.classList.remove('active');

  showQuestions(0);
  questionCounter(1);
  headerScoreHidden();  // score caché pendant l'entraînement si tu veux
};

// -----------------
// Rejouer / Home
// -----------------
tryAgainBtn.onclick = () => {
  quizPool = buildQuizPool();

  quizBox.classList.add('active');
  nextBtn.classList.remove('active');
  resultBox.classList.remove('active');

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;

  showQuestions(questionCount);
  questionCounter(questionNumb);
  headerScoreHidden();
};

goHomeBtn.onclick = () => {
  quizSection.classList.remove('active');
  nextBtn.classList.remove('active');
  resultBox.classList.remove('active');
};

// -----------------
// Next
// -----------------
nextBtn.onclick = () => {
  if (questionCount < quizPool.length - 1) {
    questionCount++;
    showQuestions(questionCount);

    questionNumb++;
    questionCounter(questionNumb);

    nextBtn.classList.remove('active');
  } else {
    showResultBox();
  }
};

// -----------------
// Affichage question
// -----------------
function showQuestions(index) {
  const questionText = document.querySelector('.question-text');
  const q = quizPool[index];

  questionText.textContent = `${q.numb}. ${q.question}`;

  // Génère options dynamiques (compatible 2 ou 4 options)
  optionList.innerHTML = q.options
    .map(opt => `<div class="option"><span>${opt}</span></div>`)
    .join("");
  

  // reset feedback
  if (feedbackBox) {
    feedbackBox.style.display = "none";
    feedbackStatus.textContent = "";
    feedbackCorrect.textContent = "";
    feedbackCorrect.style.display = "none";
    if (feedbackExplainText) {
      feedbackExplainText.textContent = "";
    } else if (feedbackExplain) {
      feedbackExplain.textContent = "";
    }
  }

  const option = document.querySelectorAll('.option');
  option.forEach(el => el.setAttribute('onclick', 'optionSelected(this)'));
}

// -----------------
// Selection -> affiche correction + explication tout de suite
// -----------------
function optionSelected(answerEl) {
  const q = quizPool[questionCount];

  const userAnswer = answerEl.textContent.trim();
  const correctAnswer = q.answer.trim();

  const allOptions = optionList.children.length;

  // Marquage correct/incorrect
  const isCorrect = userAnswer === correctAnswer;

  if (isCorrect) {
    answerEl.classList.add('correct');
    userScore += 1;
  } else {
    answerEl.classList.add('incorrect');

    // surligner la bonne réponse
    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent.trim() === correctAnswer) {
        optionList.children[i].setAttribute('class', 'option correct');
      }
    }
  }

  // Désactiver toutes les options
  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add('disabled');
  }

  // Afficher feedback immédiat
  if (feedbackBox) {
    feedbackBox.style.display = "block";
    feedbackStatus.textContent = isCorrect ? "✅ Bonne réponse" : "❌ Mauvaise réponse";
    
    if (!isCorrect) {
      feedbackCorrect.innerHTML = `<span class="feedback-label">📌 Bonne réponse :</span> ${correctAnswer}`;
      feedbackCorrect.style.display = "block";
    } else {
      feedbackCorrect.style.display = "none";
    }
    
    if (feedbackExplainText) {
      feedbackExplainText.textContent = q.explanation || "Pas d'explication fournie.";
    } else if (feedbackExplain) {
      feedbackExplain.textContent = q.explanation || "Pas d'explication fournie.";
    }
  }

  // Active suivant
  nextBtn.classList.add('active');
}

// -----------------
// Compteurs / header
// -----------------
function questionCounter(index) {
  const questionTotal = document.querySelector('.question-total');
  questionTotal.textContent = `Question ${index} sur ${quizPool.length}`;
}

// si tu veux cacher le score pendant le quiz (recommandé pour entraînement)
function headerScoreHidden() {
  const headerScoreText = document.querySelector('.header-score');
  headerScoreText.textContent = `Progression : ${questionNumb} / ${quizPool.length}`;
}

// si tu préfères afficher score live, remplace par ça et appelle-le
function headerScoreLive() {
  const headerScoreText = document.querySelector('.header-score');
  headerScoreText.textContent = `Score : ${userScore} / ${quizPool.length}`;
}

// -----------------
// Résultats
// -----------------
function showResultBox() {
  quizBox.classList.remove('active');
  resultBox.classList.add('active');

  const scoreText = document.querySelector('.score-text');
  scoreText.textContent = `Ton score : ${userScore} sur ${quizPool.length}`;

  const circularProgress = document.querySelector('.circular-progress');
  const progressValue = document.querySelector('.progress-value');

  let progressStartValue = -1;
  let progressEndValue = Math.round((userScore / quizPool.length) * 100);
  let speed = 20;

  let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

    if (progressStartValue >= progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}
