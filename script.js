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
const validateBtn = document.getElementById('validateBtn');

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

// Pour les questions à choix multiple
let selectedAnswers = [];
let isQuestionValidated = false;

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
  const categories = Array.from(new Set(allQs.map(q => q.category).filter(Boolean)));
  
  // Fonction de tri personnalisée pour trier par nombre dans le nom
  return categories.sort((a, b) => {
    // Extraire le nombre dans la catégorie
    // Format attendu: "ART 1 ...", "ART 10 ...", etc.
    const getNumber = (str) => {
      // Chercher "ART " suivi d'un nombre
      const artMatch = str.match(/ART\s+(\d+)/);
      if (artMatch) {
        return parseInt(artMatch[1], 10);
      }
      // Sinon chercher un nombre au début
      const numMatch = str.match(/^(\d+)/);
      if (numMatch) {
        return parseInt(numMatch[1], 10);
      }
      return Infinity;
    };
    
    const numA = getNumber(a);
    const numB = getNumber(b);
    
    // Si les deux ont un nombre, trier par nombre
    if (numA !== Infinity && numB !== Infinity) {
      if (numA !== numB) {
        return numA - numB;
      }
      // Si les nombres sont égaux, trier alphabétiquement
      return a.localeCompare(b);
    }
    
    // Si un seul a un nombre, celui avec nombre vient en premier
    if (numA !== Infinity) return -1;
    if (numB !== Infinity) return 1;
    
    // Si aucun n'a de nombre, trier alphabétiquement
    return a.localeCompare(b);
  });
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
  const questionType = document.getElementById('questionType');
  const q = quizPool[index];

  questionText.textContent = `${q.numb}. ${q.question}`;

  // Reset pour la nouvelle question
  selectedAnswers = [];
  isQuestionValidated = false;
  nextBtn.classList.remove('active');
  if (validateBtn) {
    validateBtn.style.display = "none";
  }

  // Vérifier si c'est une question à choix multiple (vérification robuste)
  const hasMultipleAnswers = q.answers && Array.isArray(q.answers) && q.answers.length > 1;
  const isMultiChoice = q.isMulti === true || hasMultipleAnswers;

  // Afficher "Réponse à choix multiple" si la question a plusieurs réponses
  if (isMultiChoice) {
    if (questionType) {
      questionType.textContent = "Réponse à choix multiple - Sélectionnez toutes les bonnes réponses";
      questionType.style.display = "block";
    }
    if (validateBtn) {
      validateBtn.style.display = "inline-block";
    }
  } else {
    if (questionType) {
      questionType.style.display = "none";
    }
    if (validateBtn) {
      validateBtn.style.display = "none";
    }
  }

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
// Selection -> pour choix multiple, permet sélection/désélection
// Pour questions simples, valide immédiatement
// -----------------
function optionSelected(answerEl) {
  const q = quizPool[questionCount];
  
  // Si la question est déjà validée, ne rien faire
  if (isQuestionValidated) {
    return;
  }

  // Vérifier si c'est une question à choix multiple (vérification plus robuste)
  const hasMultipleAnswers = q.answers && Array.isArray(q.answers) && q.answers.length > 1;
  const isMultiChoice = (q.isMulti === true || q.isMulti === 1 || q.isMulti === "true") || hasMultipleAnswers;

  // TOUJOURS utiliser le mode sélection pour les questions à choix multiple
  if (isMultiChoice) {
    // Empêcher toute validation immédiate - mode sélection uniquement
    const userAnswer = answerEl.textContent.trim();
    
    // Pour les questions à choix multiple : sélection/désélection uniquement
    if (answerEl.classList.contains('selected')) {
      // Désélectionner
      answerEl.classList.remove('selected');
      selectedAnswers = selectedAnswers.filter(ans => ans !== userAnswer);
    } else {
      // Sélectionner
      answerEl.classList.add('selected');
      selectedAnswers.push(userAnswer);
    }
    
    // Activer le bouton Valider si au moins une réponse est sélectionnée
    if (validateBtn) {
      if (selectedAnswers.length > 0) {
        validateBtn.classList.add('active');
      } else {
        validateBtn.classList.remove('active');
      }
    }
    
    // NE PAS valider immédiatement - attendre le clic sur "Valider"
    return;
  } else {
    // Pour les questions simples : validation immédiate
    const userAnswer = answerEl.textContent.trim();
    const correctAnswer = q.answer.trim();
    validateAnswer(answerEl, q, userAnswer, correctAnswer);
  }
}

// -----------------
// Validation de la réponse (appelée après validation pour choix multiple ou immédiatement pour questions simples)
// -----------------
function validateAnswer(answerEl, q, userAnswer, correctAnswer) {
  const allOptions = optionList.children.length;
  const hasMultipleAnswers = q.answers && Array.isArray(q.answers) && q.answers.length > 1;
  const isMultiChoice = q.isMulti === true || hasMultipleAnswers;
  const correctAnswers = isMultiChoice ? q.answers : [correctAnswer];

  isQuestionValidated = true;

  if (isMultiChoice) {
    // Pour choix multiple : vérifier toutes les réponses sélectionnées
    const allCorrect = selectedAnswers.length === correctAnswers.length &&
      selectedAnswers.every(ans => correctAnswers.some(correct => correct.trim() === ans));
    
    // Marquer toutes les réponses sélectionnées
    for (let i = 0; i < allOptions; i++) {
      const optionText = optionList.children[i].textContent.trim();
      const isSelected = selectedAnswers.includes(optionText);
      const isCorrect = correctAnswers.some(ans => ans.trim() === optionText);
      
      if (isSelected && isCorrect) {
        optionList.children[i].classList.add('correct');
        optionList.children[i].classList.remove('selected');
      } else if (isSelected && !isCorrect) {
        optionList.children[i].classList.add('incorrect');
        optionList.children[i].classList.remove('selected');
      } else if (!isSelected && isCorrect) {
        optionList.children[i].classList.add('correct');
      }
    }

    if (allCorrect) {
      userScore += 1;
    }
  } else {
    // Pour questions simples : comportement original
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
  }

  // Désactiver toutes les options
  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add('disabled');
  }

  // Afficher feedback
  if (feedbackBox) {
    feedbackBox.style.display = "block";
    
    if (isMultiChoice) {
      const allCorrect = selectedAnswers.length === correctAnswers.length &&
        selectedAnswers.every(ans => correctAnswers.some(correct => correct.trim() === ans));
      feedbackStatus.textContent = allCorrect ? "✅ Toutes les bonnes réponses" : "❌ Réponses incomplètes ou incorrectes";
      feedbackCorrect.innerHTML = `<span class="feedback-label">📌 Bonnes réponses :</span> ${correctAnswers.join(', ')}`;
      feedbackCorrect.style.display = "block";
    } else {
      const isCorrect = userAnswer === correctAnswer;
      feedbackStatus.textContent = isCorrect ? "✅ Bonne réponse" : "❌ Mauvaise réponse";
      
      if (!isCorrect) {
        feedbackCorrect.innerHTML = `<span class="feedback-label">📌 Bonne réponse :</span> ${correctAnswer}`;
        feedbackCorrect.style.display = "block";
      } else {
        feedbackCorrect.style.display = "none";
      }
    }
    
    if (feedbackExplainText) {
      feedbackExplainText.textContent = q.explanation || "Pas d'explication fournie.";
    } else if (feedbackExplain) {
      feedbackExplain.textContent = q.explanation || "Pas d'explication fournie.";
    }
  }

  // Cacher le bouton Valider et activer Suivant
  if (validateBtn) {
    validateBtn.style.display = "none";
    validateBtn.classList.remove('active');
  }
  nextBtn.classList.add('active');
}

// -----------------
// Gestion du bouton Valider pour choix multiple
// -----------------
if (validateBtn) {
  validateBtn.onclick = () => {
    const q = quizPool[questionCount];
    const correctAnswer = q.answer.trim();
    
    if (selectedAnswers.length === 0) {
      return; // Ne rien faire si aucune réponse sélectionnée
    }
    
    // Trouver l'élément de la première réponse sélectionnée pour valider
    const allOptions = optionList.children;
    let firstSelected = null;
    for (let i = 0; i < allOptions.length; i++) {
      if (allOptions[i].classList.contains('selected')) {
        firstSelected = allOptions[i];
        break;
      }
    }
    
    if (firstSelected) {
      validateAnswer(firstSelected, q, selectedAnswers[0], correctAnswer);
    }
  };
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
