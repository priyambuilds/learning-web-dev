// Quiz questions data
const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "London", "Paris", "Madrid"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: ["Harper Lee", "Mark Twain", "Jane Austen", "Ernest Hemingway"],
        correct: 0
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: ["Gold", "Oxygen", "Silver", "Iron"],
        correct: 1
    }
];

// DOM elements
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const currentQuestionSpan = document.getElementById('current-question');
const scoreSpan = document.getElementById('score');
const progressBar = document.getElementById('progress');
const finalScoreSpan = document.getElementById('final-score');
const maxScoreSpan = document.getElementById('max-score');
const resultMessage = document.querySelector('.result-message');

let currentQuestion = 0;
let score = 0;
let answered = false;

function showScreen(screen) {
    startScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    screen.classList.add('active');
    // Ensure only the active screen is visible (for display: block/flex)
    startScreen.style.display = screen === startScreen ? 'block' : 'none';
    quizScreen.style.display = screen === quizScreen ? 'block' : 'none';
    resultScreen.style.display = screen === resultScreen ? 'block' : 'none';
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    scoreSpan.textContent = score;
    showScreen(quizScreen);
    renderQuestion();
    updateProgress();
}

function renderQuestion() {
    answered = false;
    const q = questions[currentQuestion];
    questionText.textContent = q.question;
    answersContainer.innerHTML = '';
    q.answers.forEach((answer, idx) => {
        const btn = document.createElement('button');
        btn.textContent = answer;
        btn.className = 'answer-btn';
        btn.onclick = function() { selectAnswer(idx, btn); };
        answersContainer.appendChild(btn);
    });
    currentQuestionSpan.textContent = currentQuestion + 1;
    scoreSpan.textContent = score;
    updateProgress();
}

function selectAnswer(idx, btn) {
    if (answered) return;
    answered = true;
    const q = questions[currentQuestion];
    const buttons = answersContainer.querySelectorAll('.answer-btn');
    buttons.forEach((b, i) => {
        if (i === q.correct) {
            b.classList.add('correct');
        }
        if (i === idx && i !== q.correct) {
            b.classList.add('wrong');
        }
        b.disabled = true;
    });
    if (idx === q.correct) {
        score++;
        scoreSpan.textContent = score;
    }
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            renderQuestion();
        } else {
            showResult();
        }
    }, 900);
}

function updateProgress() {
    const percent = ((currentQuestion) / questions.length) * 100;
    progressBar.style.width = percent + '%';
}

function showResult() {
    showScreen(resultScreen);
    finalScoreSpan.textContent = score;
    maxScoreSpan.textContent = questions.length;
    if (score === questions.length) {
        resultMessage.textContent = "Perfect! 🎉";
    } else if (score >= questions.length - 1) {
        resultMessage.textContent = "Great job!";
    } else if (score >= Math.floor(questions.length / 2)) {
        resultMessage.textContent = "Good effort!";
    } else {
        resultMessage.textContent = "Keep practicing!";
    }
    progressBar.style.width = '100%';
}

// Event listeners
window.addEventListener('DOMContentLoaded', function() {
    // Set initial screen visibility
    showScreen(startScreen);
    maxScoreSpan.textContent = questions.length;
    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', startQuiz);
});
